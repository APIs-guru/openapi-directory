import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrgsSetMembershipForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum OrgsSetMembershipForUserRequestBodyRoleEnum {
    Admin = "admin",
    Member = "member"
}


export class OrgsSetMembershipForUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: OrgsSetMembershipForUserRequestBodyRoleEnum;
}


export class OrgsSetMembershipForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OrgsSetMembershipForUserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: OrgsSetMembershipForUserRequestBody;
}


export class OrgsSetMembershipForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  orgMembership?: shared.OrgMembership;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}

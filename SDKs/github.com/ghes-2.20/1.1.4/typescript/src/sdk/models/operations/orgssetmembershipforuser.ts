import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrgsSetMembershipForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum OrgsSetMembershipForUserRequestBodyRoleEnum {
    Admin = "admin"
,    Member = "member"
}


export class OrgsSetMembershipForUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=role" })
  role?: OrgsSetMembershipForUserRequestBodyRoleEnum;
}


export class OrgsSetMembershipForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsSetMembershipForUserPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: OrgsSetMembershipForUserRequestBody;
}


export class OrgsSetMembershipForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  orgMembership?: shared.OrgMembership;

  @Metadata()
  validationError?: shared.ValidationError;
}

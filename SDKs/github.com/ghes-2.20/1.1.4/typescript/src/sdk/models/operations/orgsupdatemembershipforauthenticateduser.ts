import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrgsUpdateMembershipForAuthenticatedUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum OrgsUpdateMembershipForAuthenticatedUserRequestBodyStateEnum {
    Active = "active"
}


export class OrgsUpdateMembershipForAuthenticatedUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state: OrgsUpdateMembershipForAuthenticatedUserRequestBodyStateEnum;
}


export class OrgsUpdateMembershipForAuthenticatedUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OrgsUpdateMembershipForAuthenticatedUserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: OrgsUpdateMembershipForAuthenticatedUserRequestBody;
}


export class OrgsUpdateMembershipForAuthenticatedUserResponse extends SpeakeasyBase {
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

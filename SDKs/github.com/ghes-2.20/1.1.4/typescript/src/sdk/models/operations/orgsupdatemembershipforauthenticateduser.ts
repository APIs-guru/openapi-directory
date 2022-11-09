import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrgsUpdateMembershipForAuthenticatedUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum OrgsUpdateMembershipForAuthenticatedUserRequestBodyStateEnum {
    Active = "active"
}


export class OrgsUpdateMembershipForAuthenticatedUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=state" })
  state: OrgsUpdateMembershipForAuthenticatedUserRequestBodyStateEnum;
}


export class OrgsUpdateMembershipForAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsUpdateMembershipForAuthenticatedUserPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: OrgsUpdateMembershipForAuthenticatedUserRequestBody;
}


export class OrgsUpdateMembershipForAuthenticatedUserResponse extends SpeakeasyBase {
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

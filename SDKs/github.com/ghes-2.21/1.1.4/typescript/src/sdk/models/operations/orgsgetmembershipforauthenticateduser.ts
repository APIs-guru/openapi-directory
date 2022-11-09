import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrgsGetMembershipForAuthenticatedUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class OrgsGetMembershipForAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsGetMembershipForAuthenticatedUserPathParams;
}


export class OrgsGetMembershipForAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  orgMembership?: shared.OrgMembership;
}

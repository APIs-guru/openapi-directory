import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrgsRemovePublicMembershipForAuthenticatedUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class OrgsRemovePublicMembershipForAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsRemovePublicMembershipForAuthenticatedUserPathParams;
}


export class OrgsRemovePublicMembershipForAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

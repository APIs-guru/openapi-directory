import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrgsRemovePublicMembershipForAuthenticatedUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class OrgsRemovePublicMembershipForAuthenticatedUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OrgsRemovePublicMembershipForAuthenticatedUserPathParams;
}


export class OrgsRemovePublicMembershipForAuthenticatedUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrgsCheckPublicMembershipForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class OrgsCheckPublicMembershipForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OrgsCheckPublicMembershipForUserPathParams;
}


export class OrgsCheckPublicMembershipForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrgsCheckMembershipForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class OrgsCheckMembershipForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OrgsCheckMembershipForUserPathParams;
}


export class OrgsCheckMembershipForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}

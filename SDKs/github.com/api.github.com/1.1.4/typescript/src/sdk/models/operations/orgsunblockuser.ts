import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrgsUnblockUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class OrgsUnblockUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OrgsUnblockUserPathParams;
}


export class OrgsUnblockUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

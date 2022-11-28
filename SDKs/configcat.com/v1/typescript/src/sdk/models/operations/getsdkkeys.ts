import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSDKKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class GetSDKKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSDKKeysPathParams;
}


export class GetSDKKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sdkKeysModel?: shared.SDKKeysModel;

  @SpeakeasyMetadata()
  statusCode: number;
}

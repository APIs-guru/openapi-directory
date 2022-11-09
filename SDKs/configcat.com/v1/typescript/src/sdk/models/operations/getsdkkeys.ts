import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSdkKeysPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class GetSdkKeysRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSdkKeysPathParams;
}


export class GetSdkKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sdkKeysModel?: shared.SdkKeysModel;

  @Metadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: string;
}


export class GetConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConfigPathParams;
}


export class GetConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  configModel?: shared.ConfigModel;

  @SpeakeasyMetadata()
  configModelHaljson?: shared.ConfigModelHaljson;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

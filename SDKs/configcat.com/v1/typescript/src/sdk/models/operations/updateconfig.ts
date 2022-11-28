import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: string;
}


export class UpdateConfigRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  updateConfigRequest?: shared.UpdateConfigRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updateConfigRequest1?: shared.UpdateConfigRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  updateConfigRequest2?: shared.UpdateConfigRequest;
}


export class UpdateConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateConfigPathParams;

  @SpeakeasyMetadata()
  request: UpdateConfigRequests;
}


export class UpdateConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  configModel?: shared.ConfigModel;

  @SpeakeasyMetadata()
  configModelHaljson?: shared.ConfigModelHaljson;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

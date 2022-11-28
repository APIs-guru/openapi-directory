import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class CreateConfigRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  createConfigRequest?: shared.CreateConfigRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createConfigRequest1?: shared.CreateConfigRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  createConfigRequest2?: shared.CreateConfigRequest;
}


export class CreateConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateConfigPathParams;

  @SpeakeasyMetadata()
  request: CreateConfigRequests;
}


export class CreateConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  configModel?: shared.ConfigModel;

  @SpeakeasyMetadata()
  configModelHaljson?: shared.ConfigModelHaljson;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

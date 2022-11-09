import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class CreateConfigRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  createConfigRequest?: shared.CreateConfigRequest;

  @Metadata({ data: "request, media_type=application/json" })
  createConfigRequest1?: shared.CreateConfigRequest;

  @Metadata({ data: "request, media_type=text/json" })
  createConfigRequest2?: shared.CreateConfigRequest;
}


export class CreateConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateConfigPathParams;

  @Metadata()
  request: CreateConfigRequests;
}


export class CreateConfigResponse extends SpeakeasyBase {
  @Metadata()
  configModel?: shared.ConfigModel;

  @Metadata()
  configModelHaljson?: shared.ConfigModelHaljson;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

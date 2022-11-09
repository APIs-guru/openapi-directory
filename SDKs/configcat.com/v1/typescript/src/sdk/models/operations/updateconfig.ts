import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: string;
}


export class UpdateConfigRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  updateConfigRequest?: shared.UpdateConfigRequest;

  @Metadata({ data: "request, media_type=application/json" })
  updateConfigRequest1?: shared.UpdateConfigRequest;

  @Metadata({ data: "request, media_type=text/json" })
  updateConfigRequest2?: shared.UpdateConfigRequest;
}


export class UpdateConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateConfigPathParams;

  @Metadata()
  request: UpdateConfigRequests;
}


export class UpdateConfigResponse extends SpeakeasyBase {
  @Metadata()
  configModel?: shared.ConfigModel;

  @Metadata()
  configModelHaljson?: shared.ConfigModelHaljson;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: string;
}


export class GetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConfigPathParams;
}


export class GetConfigResponse extends SpeakeasyBase {
  @Metadata()
  configModel?: shared.ConfigModel;

  @Metadata()
  configModelHaljson?: shared.ConfigModelHaljson;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConfigurationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConfigurationPathParams;
}


export class GetConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

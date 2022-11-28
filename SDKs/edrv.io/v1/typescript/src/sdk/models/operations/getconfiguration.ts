import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConfigurationPathParams;
}


export class GetConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

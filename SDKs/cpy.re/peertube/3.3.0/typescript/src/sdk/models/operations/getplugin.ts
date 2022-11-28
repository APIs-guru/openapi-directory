import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPluginPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=npmName" })
  npmName: string;
}


export class GetPluginSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetPluginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPluginPathParams;

  @SpeakeasyMetadata()
  security: GetPluginSecurity;
}


export class GetPluginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  plugin?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

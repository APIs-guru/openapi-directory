import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPluginPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=npmName" })
  npmName: string;
}


export class GetPluginSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetPluginRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPluginPathParams;

  @Metadata()
  security: GetPluginSecurity;
}


export class GetPluginResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  plugin?: any;

  @Metadata()
  statusCode: number;
}

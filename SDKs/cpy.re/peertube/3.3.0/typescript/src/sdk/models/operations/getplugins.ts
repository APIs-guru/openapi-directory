import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPluginsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pluginType" })
  pluginType?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uninstalled" })
  uninstalled?: boolean;
}


export class GetPluginsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetPluginsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPluginsQueryParams;

  @Metadata()
  security: GetPluginsSecurity;
}


export class GetPluginsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pluginResponse?: any;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAvailablePluginsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=currentPeerTubeEngine" })
  currentPeerTubeEngine?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pluginType" })
  pluginType?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetAvailablePluginsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetAvailablePluginsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAvailablePluginsQueryParams;

  @Metadata()
  security: GetAvailablePluginsSecurity;
}


export class GetAvailablePluginsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pluginResponse?: any;

  @Metadata()
  statusCode: number;
}

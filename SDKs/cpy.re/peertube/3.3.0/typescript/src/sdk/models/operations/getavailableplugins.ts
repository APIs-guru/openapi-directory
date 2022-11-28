import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAvailablePluginsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentPeerTubeEngine" })
  currentPeerTubeEngine?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pluginType" })
  pluginType?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetAvailablePluginsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetAvailablePluginsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAvailablePluginsQueryParams;

  @SpeakeasyMetadata()
  security: GetAvailablePluginsSecurity;
}


export class GetAvailablePluginsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pluginResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

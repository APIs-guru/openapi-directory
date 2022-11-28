import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAvailablePluginsQueryParams extends SpeakeasyBase {
    count?: number;
    currentPeerTubeEngine?: string;
    pluginType?: number;
    search?: string;
    sort?: string;
    start?: number;
}
export declare class GetAvailablePluginsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetAvailablePluginsRequest extends SpeakeasyBase {
    queryParams: GetAvailablePluginsQueryParams;
    security: GetAvailablePluginsSecurity;
}
export declare class GetAvailablePluginsResponse extends SpeakeasyBase {
    contentType: string;
    pluginResponse?: any;
    statusCode: number;
}

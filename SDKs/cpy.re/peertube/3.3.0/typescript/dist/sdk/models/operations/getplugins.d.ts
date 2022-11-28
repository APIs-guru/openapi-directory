import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPluginsQueryParams extends SpeakeasyBase {
    count?: number;
    pluginType?: number;
    sort?: string;
    start?: number;
    uninstalled?: boolean;
}
export declare class GetPluginsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetPluginsRequest extends SpeakeasyBase {
    queryParams: GetPluginsQueryParams;
    security: GetPluginsSecurity;
}
export declare class GetPluginsResponse extends SpeakeasyBase {
    contentType: string;
    pluginResponse?: any;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPluginsNpmNameRegisteredSettingsPathParams extends SpeakeasyBase {
    npmName: string;
}
export declare class GetPluginsNpmNameRegisteredSettingsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetPluginsNpmNameRegisteredSettingsRequest extends SpeakeasyBase {
    pathParams: GetPluginsNpmNameRegisteredSettingsPathParams;
    security: GetPluginsNpmNameRegisteredSettingsSecurity;
}
export declare class GetPluginsNpmNameRegisteredSettingsResponse extends SpeakeasyBase {
    contentType: string;
    getPluginsNpmNameRegisteredSettings200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}

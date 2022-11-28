import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPluginsNpmNamePublicSettingsPathParams extends SpeakeasyBase {
    npmName: string;
}
export declare class GetPluginsNpmNamePublicSettingsRequest extends SpeakeasyBase {
    pathParams: GetPluginsNpmNamePublicSettingsPathParams;
}
export declare class GetPluginsNpmNamePublicSettingsResponse extends SpeakeasyBase {
    contentType: string;
    getPluginsNpmNamePublicSettings200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}

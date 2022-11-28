import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutPluginsNpmNameSettingsPathParams extends SpeakeasyBase {
    npmName: string;
}
export declare class PutPluginsNpmNameSettingsRequestBody extends SpeakeasyBase {
    settings?: Map<string, any>;
}
export declare class PutPluginsNpmNameSettingsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PutPluginsNpmNameSettingsRequest extends SpeakeasyBase {
    pathParams: PutPluginsNpmNameSettingsPathParams;
    request?: PutPluginsNpmNameSettingsRequestBody;
    security: PutPluginsNpmNameSettingsSecurity;
}
export declare class PutPluginsNpmNameSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

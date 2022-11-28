import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAddonLinkersLinkerKeyValuesValueIdPathParams extends SpeakeasyBase {
    linkerKey: string;
    valueId: number;
}
export declare class GetAddonLinkersLinkerKeyValuesValueIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetAddonLinkersLinkerKeyValuesValueIdRequest extends SpeakeasyBase {
    pathParams: GetAddonLinkersLinkerKeyValuesValueIdPathParams;
    security: GetAddonLinkersLinkerKeyValuesValueIdSecurity;
}
export declare class GetAddonLinkersLinkerKeyValuesValueIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}

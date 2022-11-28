import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAddonLinkersLinkerKeyValuesValueIdPathParams extends SpeakeasyBase {
    linkerKey: string;
    valueId: number;
}
export declare class DeleteAddonLinkersLinkerKeyValuesValueIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteAddonLinkersLinkerKeyValuesValueIdRequest extends SpeakeasyBase {
    pathParams: DeleteAddonLinkersLinkerKeyValuesValueIdPathParams;
    security: DeleteAddonLinkersLinkerKeyValuesValueIdSecurity;
}
export declare class DeleteAddonLinkersLinkerKeyValuesValueIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}

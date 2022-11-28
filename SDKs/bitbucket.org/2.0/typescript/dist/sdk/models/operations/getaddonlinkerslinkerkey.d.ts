import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAddonLinkersLinkerKeyPathParams extends SpeakeasyBase {
    linkerKey: string;
}
export declare class GetAddonLinkersLinkerKeySecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetAddonLinkersLinkerKeyRequest extends SpeakeasyBase {
    pathParams: GetAddonLinkersLinkerKeyPathParams;
    security: GetAddonLinkersLinkerKeySecurity;
}
export declare class GetAddonLinkersLinkerKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}

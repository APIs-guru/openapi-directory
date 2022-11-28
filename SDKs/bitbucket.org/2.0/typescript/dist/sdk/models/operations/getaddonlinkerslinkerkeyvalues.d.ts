import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAddonLinkersLinkerKeyValuesPathParams extends SpeakeasyBase {
    linkerKey: string;
}
export declare class GetAddonLinkersLinkerKeyValuesSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetAddonLinkersLinkerKeyValuesRequest extends SpeakeasyBase {
    pathParams: GetAddonLinkersLinkerKeyValuesPathParams;
    security: GetAddonLinkersLinkerKeyValuesSecurity;
}
export declare class GetAddonLinkersLinkerKeyValuesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}

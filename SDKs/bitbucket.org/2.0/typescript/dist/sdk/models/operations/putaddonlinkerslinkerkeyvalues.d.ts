import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutAddonLinkersLinkerKeyValuesPathParams extends SpeakeasyBase {
    linkerKey: string;
}
export declare class PutAddonLinkersLinkerKeyValuesSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutAddonLinkersLinkerKeyValuesRequest extends SpeakeasyBase {
    pathParams: PutAddonLinkersLinkerKeyValuesPathParams;
    security: PutAddonLinkersLinkerKeyValuesSecurity;
}
export declare class PutAddonLinkersLinkerKeyValuesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}

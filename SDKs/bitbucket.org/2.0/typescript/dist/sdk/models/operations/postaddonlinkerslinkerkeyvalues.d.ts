import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAddonLinkersLinkerKeyValuesPathParams extends SpeakeasyBase {
    linkerKey: string;
}
export declare class PostAddonLinkersLinkerKeyValuesSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostAddonLinkersLinkerKeyValuesRequest extends SpeakeasyBase {
    pathParams: PostAddonLinkersLinkerKeyValuesPathParams;
    security: PostAddonLinkersLinkerKeyValuesSecurity;
}
export declare class PostAddonLinkersLinkerKeyValuesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}

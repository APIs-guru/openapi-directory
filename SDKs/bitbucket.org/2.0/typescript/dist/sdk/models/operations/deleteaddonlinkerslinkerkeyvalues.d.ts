import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAddonLinkersLinkerKeyValuesPathParams extends SpeakeasyBase {
    linkerKey: string;
}
export declare class DeleteAddonLinkersLinkerKeyValuesSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteAddonLinkersLinkerKeyValuesRequest extends SpeakeasyBase {
    pathParams: DeleteAddonLinkersLinkerKeyValuesPathParams;
    security: DeleteAddonLinkersLinkerKeyValuesSecurity;
}
export declare class DeleteAddonLinkersLinkerKeyValuesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}

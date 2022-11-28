import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromeFromUrlGetQueryParams extends SpeakeasyBase {
    output?: string;
    url: string;
}
export declare class ChromeFromUrlGetSecurity extends SpeakeasyBase {
    queryApiKey: shared.SchemeQueryApiKey;
}
export declare class ChromeFromUrlGetRequest extends SpeakeasyBase {
    queryParams: ChromeFromUrlGetQueryParams;
    security: ChromeFromUrlGetSecurity;
}
export declare class ChromeFromUrlGetResponse extends SpeakeasyBase {
    apiResponseFailure?: shared.ApiResponseFailure;
    apiResponseSuccess?: shared.ApiResponseSuccess;
    contentType: string;
    statusCode: number;
    chromeFromUrlGet200ApplicationPdfBinaryString?: Uint8Array;
}

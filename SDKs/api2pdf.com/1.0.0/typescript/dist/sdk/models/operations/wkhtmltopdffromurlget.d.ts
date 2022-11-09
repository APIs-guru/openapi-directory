import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class WkhtmltopdfFromUrlGetQueryParams extends SpeakeasyBase {
    output?: string;
    url: string;
}
export declare class WkhtmltopdfFromUrlGetSecurity extends SpeakeasyBase {
    queryApiKey: shared.SchemeQueryApiKey;
}
export declare class WkhtmltopdfFromUrlGetRequest extends SpeakeasyBase {
    queryParams: WkhtmltopdfFromUrlGetQueryParams;
    security: WkhtmltopdfFromUrlGetSecurity;
}
export declare class WkhtmltopdfFromUrlGetResponse extends SpeakeasyBase {
    apiResponseFailure?: shared.ApiResponseFailure;
    apiResponseSuccess?: shared.ApiResponseSuccess;
    contentType: string;
    statusCode: number;
    wkhtmltopdfFromUrlGet200ApplicationPdfBinaryString?: Uint8Array;
}

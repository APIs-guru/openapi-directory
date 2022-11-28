import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WkhtmltopdfFromUrlPostRequest extends SpeakeasyBase {
    request?: shared.WkHtmlToPdfUrlToPdfRequest;
}
export declare class WkhtmltopdfFromUrlPostResponse extends SpeakeasyBase {
    apiResponseFailure?: shared.ApiResponseFailure;
    apiResponseSuccess?: shared.ApiResponseSuccess;
    contentType: string;
    statusCode: number;
}

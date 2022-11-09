import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class WkhtmltopdfFromHtmlPostRequest extends SpeakeasyBase {
    request?: shared.WkHtmlToPdfHtmlToPdfRequest;
}
export declare class WkhtmltopdfFromHtmlPostResponse extends SpeakeasyBase {
    apiResponseFailure?: shared.ApiResponseFailure;
    apiResponseSuccess?: shared.ApiResponseSuccess;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ChromeFromHtmlPostRequest extends SpeakeasyBase {
    request?: shared.ChromeHtmlToPdfRequest;
}
export declare class ChromeFromHtmlPostResponse extends SpeakeasyBase {
    apiResponseFailure?: shared.ApiResponseFailure;
    apiResponseSuccess?: shared.ApiResponseSuccess;
    contentType: string;
    statusCode: number;
}

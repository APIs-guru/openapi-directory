import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ChromeFromUrlPostRequest extends SpeakeasyBase {
    request?: shared.ChromeUrlToPdfRequest;
}
export declare class ChromeFromUrlPostResponse extends SpeakeasyBase {
    apiResponseFailure?: shared.ApiResponseFailure;
    apiResponseSuccess?: shared.ApiResponseSuccess;
    contentType: string;
    statusCode: number;
}

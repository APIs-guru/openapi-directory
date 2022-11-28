import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LibreConvertPostRequest extends SpeakeasyBase {
    request?: shared.LibreOfficeConvertRequest;
}
export declare class LibreConvertPostResponse extends SpeakeasyBase {
    apiResponseFailure?: shared.ApiResponseFailure;
    apiResponseSuccess?: shared.ApiResponseSuccess;
    contentType: string;
    statusCode: number;
}

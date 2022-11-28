import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnforceLoginPasswordChangeHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class EnforceLoginPasswordChangeRequest extends SpeakeasyBase {
    headers: EnforceLoginPasswordChangeHeaders;
}
export declare class EnforceLoginPasswordChangeResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}

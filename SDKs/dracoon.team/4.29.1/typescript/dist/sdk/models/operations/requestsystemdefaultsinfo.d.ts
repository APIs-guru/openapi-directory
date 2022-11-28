import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestSystemDefaultsInfoHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestSystemDefaultsInfoRequest extends SpeakeasyBase {
    headers: RequestSystemDefaultsInfoHeaders;
}
export declare class RequestSystemDefaultsInfoResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    systemDefaults?: shared.SystemDefaults;
}

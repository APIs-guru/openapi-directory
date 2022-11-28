import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestSystemDefaultsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestSystemDefaultsRequest extends SpeakeasyBase {
    headers: RequestSystemDefaultsHeaders;
}
export declare class RequestSystemDefaultsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    systemDefaults?: shared.SystemDefaults;
}

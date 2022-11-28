import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestSystemInfoQueryParams extends SpeakeasyBase {
    isEnabled?: boolean;
}
export declare class RequestSystemInfoRequest extends SpeakeasyBase {
    queryParams: RequestSystemInfoQueryParams;
}
export declare class RequestSystemInfoResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    systemInfo?: shared.SystemInfo;
}

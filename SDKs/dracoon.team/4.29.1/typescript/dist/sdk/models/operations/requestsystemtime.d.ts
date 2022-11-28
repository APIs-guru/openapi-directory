import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestSystemTimeHeaders extends SpeakeasyBase {
    xSdsDateFormat?: any;
}
export declare class RequestSystemTimeRequest extends SpeakeasyBase {
    headers: RequestSystemTimeHeaders;
}
export declare class RequestSystemTimeResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    sdsServerTime?: shared.SdsServerTime;
    statusCode: number;
}

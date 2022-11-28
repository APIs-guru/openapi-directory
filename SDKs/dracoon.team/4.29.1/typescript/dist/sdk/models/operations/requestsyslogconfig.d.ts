import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestSyslogConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestSyslogConfigRequest extends SpeakeasyBase {
    headers: RequestSyslogConfigHeaders;
}
export declare class RequestSyslogConfigResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    syslogConfig?: shared.SyslogConfig;
}

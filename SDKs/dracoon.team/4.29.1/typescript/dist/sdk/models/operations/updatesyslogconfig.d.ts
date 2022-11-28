import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSyslogConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class UpdateSyslogConfigRequest extends SpeakeasyBase {
    headers: UpdateSyslogConfigHeaders;
    request: shared.UpdateSyslogConfig;
}
export declare class UpdateSyslogConfigResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    syslogConfig?: shared.SyslogConfig;
}

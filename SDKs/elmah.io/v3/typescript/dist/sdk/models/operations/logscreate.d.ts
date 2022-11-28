import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LogsCreateRequests extends SpeakeasyBase {
    createLog?: shared.CreateLog;
    createLog1?: shared.CreateLog;
    createLog2?: shared.CreateLog;
    createLog3?: shared.CreateLog;
}
export declare class LogsCreateRequest extends SpeakeasyBase {
    request?: LogsCreateRequests;
}
export declare class LogsCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    createLogResult?: shared.CreateLogResult;
    statusCode: number;
}

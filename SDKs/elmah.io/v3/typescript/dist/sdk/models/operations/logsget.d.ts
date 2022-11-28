import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LogsGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class LogsGetRequest extends SpeakeasyBase {
    pathParams: LogsGetPathParams;
}
export declare class LogsGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    log?: shared.Log;
    statusCode: number;
}

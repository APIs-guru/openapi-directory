import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LogsGetAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    logs?: shared.Log[];
    statusCode: number;
}

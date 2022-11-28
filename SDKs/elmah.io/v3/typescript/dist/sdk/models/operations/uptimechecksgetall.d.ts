import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UptimeChecksGetAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    uptimeChecks?: shared.UptimeCheck[];
}

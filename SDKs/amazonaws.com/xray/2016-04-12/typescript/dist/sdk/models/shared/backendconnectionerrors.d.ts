import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
**/
export declare class BackendConnectionErrors extends SpeakeasyBase {
    connectionRefusedCount?: number;
    httpCode4XxCount?: number;
    httpCode5XxCount?: number;
    otherCount?: number;
    timeoutCount?: number;
    unknownHostCount?: number;
}

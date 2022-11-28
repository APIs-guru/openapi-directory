import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about requests that failed with a 4xx Client Error status code.
**/
export declare class ErrorStatistics extends SpeakeasyBase {
    otherCount?: number;
    throttleCount?: number;
    totalCount?: number;
}

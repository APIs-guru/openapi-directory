import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Retention properties contain the duration for which your time series data must be stored in the magnetic store and the memory store.
**/
export declare class RetentionProperties extends SpeakeasyBase {
    magneticStoreRetentionPeriodInDays: number;
    memoryStoreRetentionPeriodInHours: number;
}

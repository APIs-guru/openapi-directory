import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a log group.
**/
export declare class LogGroup extends SpeakeasyBase {
    arn?: string;
    creationTime?: number;
    kmsKeyId?: string;
    logGroupName?: string;
    metricFilterCount?: number;
    retentionInDays?: number;
    storedBytes?: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * [TrustedTester] [Required] Defines the ranges for range partitioning.
**/
export declare class RangePartitioningRange extends SpeakeasyBase {
    end?: string;
    interval?: string;
    start?: string;
}
export declare class RangePartitioning extends SpeakeasyBase {
    field?: string;
    range?: RangePartitioningRange;
}

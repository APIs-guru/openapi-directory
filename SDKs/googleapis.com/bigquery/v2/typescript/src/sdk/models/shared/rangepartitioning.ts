import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RangePartitioningRange
/** 
 * [TrustedTester] [Required] Defines the ranges for range partitioning.
**/
export class RangePartitioningRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: string;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: string;
}


export class RangePartitioning extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: RangePartitioningRange;
}

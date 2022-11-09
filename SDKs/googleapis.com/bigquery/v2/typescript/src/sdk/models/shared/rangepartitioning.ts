import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RangePartitioningRange
/** 
 * [TrustedTester] [Required] Defines the ranges for range partitioning.
**/
export class RangePartitioningRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: string;

  @Metadata({ data: "json, name=interval" })
  interval?: string;

  @Metadata({ data: "json, name=start" })
  start?: string;
}


export class RangePartitioning extends SpeakeasyBase {
  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=range" })
  range?: RangePartitioningRange;
}

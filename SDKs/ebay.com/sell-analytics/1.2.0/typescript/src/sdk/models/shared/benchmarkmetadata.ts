import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BenchmarkMetadata
/** 
 * This complex type defines the fields that comprise the benchmark against which the seller's performance is compared. The comparison determines the seller's rating for the metric.
**/
export class BenchmarkMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=average" })
  average?: string;
}

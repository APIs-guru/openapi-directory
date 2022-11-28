import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BenchmarkMetadata
/** 
 * This complex type defines the fields that comprise the benchmark against which the seller's performance is compared. The comparison determines the seller's rating for the metric.
**/
export class BenchmarkMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=average" })
  average?: string;
}

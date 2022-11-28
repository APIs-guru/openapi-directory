import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HistogramBucket } from "./histogrambucket";



// Float64Stats
/** 
 * The data statistics of a series of FLOAT64 values.
**/
export class Float64Stats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=histogramBuckets", elemType: HistogramBucket })
  histogramBuckets?: HistogramBucket[];

  @SpeakeasyMetadata({ data: "json, name=mean" })
  mean?: number;

  @SpeakeasyMetadata({ data: "json, name=quantiles" })
  quantiles?: number[];

  @SpeakeasyMetadata({ data: "json, name=standardDeviation" })
  standardDeviation?: number;
}

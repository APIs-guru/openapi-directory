import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HistogramBucket } from "./histogrambucket";


// Float64Stats
/** 
 * The data statistics of a series of FLOAT64 values.
**/
export class Float64Stats extends SpeakeasyBase {
  @Metadata({ data: "json, name=histogramBuckets", elemType: shared.HistogramBucket })
  histogramBuckets?: HistogramBucket[];

  @Metadata({ data: "json, name=mean" })
  mean?: number;

  @Metadata({ data: "json, name=quantiles" })
  quantiles?: number[];

  @Metadata({ data: "json, name=standardDeviation" })
  standardDeviation?: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HistogramBucket
/** 
 * A bucket of a histogram.
**/
export class HistogramBucket extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=max" })
  max?: number;

  @Metadata({ data: "json, name=min" })
  min?: number;
}

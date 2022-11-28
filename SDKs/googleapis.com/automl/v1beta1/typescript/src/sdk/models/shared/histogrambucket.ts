import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HistogramBucket
/** 
 * A bucket of a histogram.
**/
export class HistogramBucket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min?: number;
}

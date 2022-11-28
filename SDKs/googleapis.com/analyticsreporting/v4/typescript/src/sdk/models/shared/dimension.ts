import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Dimension
/** 
 * [Dimensions](https://support.google.com/analytics/answer/1033861) are attributes of your data. For example, the dimension `ga:city` indicates the city, for example, "Paris" or "New York", from which a session originates.
**/
export class Dimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=histogramBuckets" })
  histogramBuckets?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

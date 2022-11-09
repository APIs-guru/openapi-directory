import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Dimension
/** 
 * [Dimensions](https://support.google.com/analytics/answer/1033861) are attributes of your data. For example, the dimension `ga:city` indicates the city, for example, "Paris" or "New York", from which a session originates.
**/
export class Dimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=histogramBuckets" })
  histogramBuckets?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}

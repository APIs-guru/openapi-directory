import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Metric
/** 
 * The quantitative measurements of a report. For example, the metric `eventCount` is the total number of events. Requests are allowed up to 10 metrics.
**/
export class Metric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expression" })
  expression?: string;

  @SpeakeasyMetadata({ data: "json, name=invisible" })
  invisible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

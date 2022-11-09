import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Metric
/** 
 * The quantitative measurements of a report. For example, the metric `eventCount` is the total number of events. Requests are allowed up to 10 metrics.
**/
export class Metric extends SpeakeasyBase {
  @Metadata({ data: "json, name=expression" })
  expression?: string;

  @Metadata({ data: "json, name=invisible" })
  invisible?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;
}

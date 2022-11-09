import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HistogramEntry
/** 
 * An entry in a histogram for a statistic. A histogram maps the range of observed values on the X axis, and the prevalence of each value on the Y axis.
**/
export class HistogramEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Value" })
  value?: number;
}

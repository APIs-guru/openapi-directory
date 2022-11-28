import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HistogramEntry
/** 
 * An entry in a histogram for a statistic. A histogram maps the range of observed values on the X axis, and the prevalence of each value on the Y axis.
**/
export class HistogramEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: number;
}

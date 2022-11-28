import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HpoObjective
/** 
 * <p>The metric to optimize during hyperparameter optimization (HPO).</p> <note> <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code> at this time.</p> </note>
**/
export class HpoObjective extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName?: string;

  @SpeakeasyMetadata({ data: "json, name=metricRegex" })
  metricRegex?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * <p>The metric to optimize during hyperparameter optimization (HPO).</p> <note> <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code> at this time.</p> </note>
**/
export declare class HpoObjective extends SpeakeasyBase {
    metricName?: string;
    metricRegex?: string;
    type?: string;
}

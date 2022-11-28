import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalyDetectorConfiguration } from "./anomalydetectorconfiguration";
import { Dimension } from "./dimension";
import { AnomalyDetectorStateValueEnum } from "./anomalydetectorstatevalueenum";
/**
 * An anomaly detection model associated with a particular CloudWatch metric and statistic. You can use the model to display a band of expected normal values when the metric is graphed.
**/
export declare class AnomalyDetector extends SpeakeasyBase {
    configuration?: AnomalyDetectorConfiguration;
    dimensions?: Dimension[];
    metricName?: string;
    namespace?: string;
    stat?: string;
    stateValue?: AnomalyDetectorStateValueEnum;
}

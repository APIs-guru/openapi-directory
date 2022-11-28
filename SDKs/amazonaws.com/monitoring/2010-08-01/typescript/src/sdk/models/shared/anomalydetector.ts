import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnomalyDetectorConfiguration } from "./anomalydetectorconfiguration";
import { Dimension } from "./dimension";
import { AnomalyDetectorStateValueEnum } from "./anomalydetectorstatevalueenum";



// AnomalyDetector
/** 
 * An anomaly detection model associated with a particular CloudWatch metric and statistic. You can use the model to display a band of expected normal values when the metric is graphed.
**/
export class AnomalyDetector extends SpeakeasyBase {
  @SpeakeasyMetadata()
  configuration?: AnomalyDetectorConfiguration;

  @SpeakeasyMetadata({ elemType: Dimension })
  dimensions?: Dimension[];

  @SpeakeasyMetadata()
  metricName?: string;

  @SpeakeasyMetadata()
  namespace?: string;

  @SpeakeasyMetadata()
  stat?: string;

  @SpeakeasyMetadata()
  stateValue?: AnomalyDetectorStateValueEnum;
}

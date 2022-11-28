import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnomalyDetector } from "./anomalydetector";



export class DescribeAnomalyDetectorsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AnomalyDetector })
  anomalyDetectors?: AnomalyDetector[];

  @SpeakeasyMetadata()
  nextToken?: string;
}

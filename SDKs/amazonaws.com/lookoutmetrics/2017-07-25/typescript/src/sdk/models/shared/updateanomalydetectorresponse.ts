import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateAnomalyDetectorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAnomalyDetectorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn?: string;
}

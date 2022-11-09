import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateAnomalyDetectorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateAnomalyDetectorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn?: string;
}

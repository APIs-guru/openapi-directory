import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateTrainingJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrainingJobArn" })
  trainingJobArn: string;
}

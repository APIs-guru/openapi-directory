import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateTrainingJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrainingJobArn" })
  trainingJobArn: string;
}

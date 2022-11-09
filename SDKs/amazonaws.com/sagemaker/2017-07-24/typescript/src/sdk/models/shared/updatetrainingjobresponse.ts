import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateTrainingJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrainingJobArn" })
  trainingJobArn: string;
}

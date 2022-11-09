import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopTrainingJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrainingJobName" })
  trainingJobName: string;
}

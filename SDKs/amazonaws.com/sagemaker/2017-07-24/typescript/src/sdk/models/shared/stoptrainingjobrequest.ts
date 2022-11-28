import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopTrainingJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrainingJobName" })
  trainingJobName: string;
}

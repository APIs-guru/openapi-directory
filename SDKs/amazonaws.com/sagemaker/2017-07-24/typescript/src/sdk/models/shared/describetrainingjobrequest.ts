import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeTrainingJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrainingJobName" })
  trainingJobName: string;
}

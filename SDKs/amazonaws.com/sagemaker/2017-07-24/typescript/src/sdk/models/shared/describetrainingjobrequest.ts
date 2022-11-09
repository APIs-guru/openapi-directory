import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeTrainingJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrainingJobName" })
  trainingJobName: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HumanTaskConfig } from "./humantaskconfig";
import { LabelingJobInputConfig } from "./labelingjobinputconfig";
import { LabelingJobAlgorithmsConfig } from "./labelingjobalgorithmsconfig";
import { LabelingJobOutputConfig } from "./labelingjoboutputconfig";
import { LabelingJobStoppingConditions } from "./labelingjobstoppingconditions";
import { Tag } from "./tag";



export class CreateLabelingJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HumanTaskConfig" })
  humanTaskConfig: HumanTaskConfig;

  @SpeakeasyMetadata({ data: "json, name=InputConfig" })
  inputConfig: LabelingJobInputConfig;

  @SpeakeasyMetadata({ data: "json, name=LabelAttributeName" })
  labelAttributeName: string;

  @SpeakeasyMetadata({ data: "json, name=LabelCategoryConfigS3Uri" })
  labelCategoryConfigS3Uri?: string;

  @SpeakeasyMetadata({ data: "json, name=LabelingJobAlgorithmsConfig" })
  labelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;

  @SpeakeasyMetadata({ data: "json, name=LabelingJobName" })
  labelingJobName: string;

  @SpeakeasyMetadata({ data: "json, name=OutputConfig" })
  outputConfig: LabelingJobOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=StoppingConditions" })
  stoppingConditions?: LabelingJobStoppingConditions;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}

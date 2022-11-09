import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HumanTaskConfig } from "./humantaskconfig";
import { LabelingJobInputConfig } from "./labelingjobinputconfig";
import { LabelingJobAlgorithmsConfig } from "./labelingjobalgorithmsconfig";
import { LabelingJobOutputConfig } from "./labelingjoboutputconfig";
import { LabelingJobStoppingConditions } from "./labelingjobstoppingconditions";
import { Tag } from "./tag";


export class CreateLabelingJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HumanTaskConfig" })
  humanTaskConfig: HumanTaskConfig;

  @Metadata({ data: "json, name=InputConfig" })
  inputConfig: LabelingJobInputConfig;

  @Metadata({ data: "json, name=LabelAttributeName" })
  labelAttributeName: string;

  @Metadata({ data: "json, name=LabelCategoryConfigS3Uri" })
  labelCategoryConfigS3Uri?: string;

  @Metadata({ data: "json, name=LabelingJobAlgorithmsConfig" })
  labelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;

  @Metadata({ data: "json, name=LabelingJobName" })
  labelingJobName: string;

  @Metadata({ data: "json, name=OutputConfig" })
  outputConfig: LabelingJobOutputConfig;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=StoppingConditions" })
  stoppingConditions?: LabelingJobStoppingConditions;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}

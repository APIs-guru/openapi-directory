import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HumanTaskConfig } from "./humantaskconfig";
import { LabelingJobInputConfig } from "./labelingjobinputconfig";
import { LabelCounters } from "./labelcounters";
import { LabelingJobAlgorithmsConfig } from "./labelingjobalgorithmsconfig";
import { LabelingJobOutput } from "./labelingjoboutput";
import { LabelingJobStatusEnum } from "./labelingjobstatusenum";
import { LabelingJobOutputConfig } from "./labelingjoboutputconfig";
import { LabelingJobStoppingConditions } from "./labelingjobstoppingconditions";
import { Tag } from "./tag";



export class DescribeLabelingJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=HumanTaskConfig" })
  humanTaskConfig: HumanTaskConfig;

  @SpeakeasyMetadata({ data: "json, name=InputConfig" })
  inputConfig: LabelingJobInputConfig;

  @SpeakeasyMetadata({ data: "json, name=JobReferenceCode" })
  jobReferenceCode: string;

  @SpeakeasyMetadata({ data: "json, name=LabelAttributeName" })
  labelAttributeName?: string;

  @SpeakeasyMetadata({ data: "json, name=LabelCategoryConfigS3Uri" })
  labelCategoryConfigS3Uri?: string;

  @SpeakeasyMetadata({ data: "json, name=LabelCounters" })
  labelCounters: LabelCounters;

  @SpeakeasyMetadata({ data: "json, name=LabelingJobAlgorithmsConfig" })
  labelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;

  @SpeakeasyMetadata({ data: "json, name=LabelingJobArn" })
  labelingJobArn: string;

  @SpeakeasyMetadata({ data: "json, name=LabelingJobName" })
  labelingJobName: string;

  @SpeakeasyMetadata({ data: "json, name=LabelingJobOutput" })
  labelingJobOutput?: LabelingJobOutput;

  @SpeakeasyMetadata({ data: "json, name=LabelingJobStatus" })
  labelingJobStatus: LabelingJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @SpeakeasyMetadata({ data: "json, name=OutputConfig" })
  outputConfig: LabelingJobOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=StoppingConditions" })
  stoppingConditions?: LabelingJobStoppingConditions;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}

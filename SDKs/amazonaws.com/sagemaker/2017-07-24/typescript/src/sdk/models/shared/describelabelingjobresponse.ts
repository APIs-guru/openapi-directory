import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=HumanTaskConfig" })
  humanTaskConfig: HumanTaskConfig;

  @Metadata({ data: "json, name=InputConfig" })
  inputConfig: LabelingJobInputConfig;

  @Metadata({ data: "json, name=JobReferenceCode" })
  jobReferenceCode: string;

  @Metadata({ data: "json, name=LabelAttributeName" })
  labelAttributeName?: string;

  @Metadata({ data: "json, name=LabelCategoryConfigS3Uri" })
  labelCategoryConfigS3Uri?: string;

  @Metadata({ data: "json, name=LabelCounters" })
  labelCounters: LabelCounters;

  @Metadata({ data: "json, name=LabelingJobAlgorithmsConfig" })
  labelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;

  @Metadata({ data: "json, name=LabelingJobArn" })
  labelingJobArn: string;

  @Metadata({ data: "json, name=LabelingJobName" })
  labelingJobName: string;

  @Metadata({ data: "json, name=LabelingJobOutput" })
  labelingJobOutput?: LabelingJobOutput;

  @Metadata({ data: "json, name=LabelingJobStatus" })
  labelingJobStatus: LabelingJobStatusEnum;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @Metadata({ data: "json, name=OutputConfig" })
  outputConfig: LabelingJobOutputConfig;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=StoppingConditions" })
  stoppingConditions?: LabelingJobStoppingConditions;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}

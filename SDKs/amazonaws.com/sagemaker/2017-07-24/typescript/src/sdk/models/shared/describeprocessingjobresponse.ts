import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppSpecification } from "./appspecification";
import { ExperimentConfig } from "./experimentconfig";
import { NetworkConfig } from "./networkconfig";
import { ProcessingInput } from "./processinginput";
import { ProcessingJobStatusEnum } from "./processingjobstatusenum";
import { ProcessingOutputConfig } from "./processingoutputconfig";
import { ProcessingResources } from "./processingresources";
import { ProcessingStoppingCondition } from "./processingstoppingcondition";


export class DescribeProcessingJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppSpecification" })
  appSpecification: AppSpecification;

  @Metadata({ data: "json, name=AutoMLJobArn" })
  autoMlJobArn?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @Metadata({ data: "json, name=ExitMessage" })
  exitMessage?: string;

  @Metadata({ data: "json, name=ExperimentConfig" })
  experimentConfig?: ExperimentConfig;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=MonitoringScheduleArn" })
  monitoringScheduleArn?: string;

  @Metadata({ data: "json, name=NetworkConfig" })
  networkConfig?: NetworkConfig;

  @Metadata({ data: "json, name=ProcessingEndTime" })
  processingEndTime?: Date;

  @Metadata({ data: "json, name=ProcessingInputs", elemType: shared.ProcessingInput })
  processingInputs?: ProcessingInput[];

  @Metadata({ data: "json, name=ProcessingJobArn" })
  processingJobArn: string;

  @Metadata({ data: "json, name=ProcessingJobName" })
  processingJobName: string;

  @Metadata({ data: "json, name=ProcessingJobStatus" })
  processingJobStatus: ProcessingJobStatusEnum;

  @Metadata({ data: "json, name=ProcessingOutputConfig" })
  processingOutputConfig?: ProcessingOutputConfig;

  @Metadata({ data: "json, name=ProcessingResources" })
  processingResources: ProcessingResources;

  @Metadata({ data: "json, name=ProcessingStartTime" })
  processingStartTime?: Date;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=StoppingCondition" })
  stoppingCondition?: ProcessingStoppingCondition;

  @Metadata({ data: "json, name=TrainingJobArn" })
  trainingJobArn?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppSpecification } from "./appspecification";
import { ExperimentConfig } from "./experimentconfig";
import { NetworkConfig } from "./networkconfig";
import { ProcessingInput } from "./processinginput";
import { ProcessingJobStatusEnum } from "./processingjobstatusenum";
import { ProcessingOutputConfig } from "./processingoutputconfig";
import { ProcessingResources } from "./processingresources";
import { ProcessingStoppingCondition } from "./processingstoppingcondition";



export class DescribeProcessingJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppSpecification" })
  appSpecification: AppSpecification;

  @SpeakeasyMetadata({ data: "json, name=AutoMLJobArn" })
  autoMlJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ExitMessage" })
  exitMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=ExperimentConfig" })
  experimentConfig?: ExperimentConfig;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=MonitoringScheduleArn" })
  monitoringScheduleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=NetworkConfig" })
  networkConfig?: NetworkConfig;

  @SpeakeasyMetadata({ data: "json, name=ProcessingEndTime" })
  processingEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ProcessingInputs", elemType: ProcessingInput })
  processingInputs?: ProcessingInput[];

  @SpeakeasyMetadata({ data: "json, name=ProcessingJobArn" })
  processingJobArn: string;

  @SpeakeasyMetadata({ data: "json, name=ProcessingJobName" })
  processingJobName: string;

  @SpeakeasyMetadata({ data: "json, name=ProcessingJobStatus" })
  processingJobStatus: ProcessingJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ProcessingOutputConfig" })
  processingOutputConfig?: ProcessingOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=ProcessingResources" })
  processingResources: ProcessingResources;

  @SpeakeasyMetadata({ data: "json, name=ProcessingStartTime" })
  processingStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StoppingCondition" })
  stoppingCondition?: ProcessingStoppingCondition;

  @SpeakeasyMetadata({ data: "json, name=TrainingJobArn" })
  trainingJobArn?: string;
}

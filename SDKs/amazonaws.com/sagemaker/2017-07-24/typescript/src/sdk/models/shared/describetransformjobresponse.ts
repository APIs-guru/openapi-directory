import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchStrategyEnum } from "./batchstrategyenum";
import { DataProcessing } from "./dataprocessing";
import { ExperimentConfig } from "./experimentconfig";
import { ModelClientConfig } from "./modelclientconfig";
import { TransformInput } from "./transforminput";
import { TransformJobStatusEnum } from "./transformjobstatusenum";
import { TransformOutput } from "./transformoutput";
import { TransformResources } from "./transformresources";



export class DescribeTransformJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoMLJobArn" })
  autoMlJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=BatchStrategy" })
  batchStrategy?: BatchStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=DataProcessing" })
  dataProcessing?: DataProcessing;

  @SpeakeasyMetadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ExperimentConfig" })
  experimentConfig?: ExperimentConfig;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=LabelingJobArn" })
  labelingJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxConcurrentTransforms" })
  maxConcurrentTransforms?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxPayloadInMB" })
  maxPayloadInMb?: number;

  @SpeakeasyMetadata({ data: "json, name=ModelClientConfig" })
  modelClientConfig?: ModelClientConfig;

  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName: string;

  @SpeakeasyMetadata({ data: "json, name=TransformEndTime" })
  transformEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TransformInput" })
  transformInput: TransformInput;

  @SpeakeasyMetadata({ data: "json, name=TransformJobArn" })
  transformJobArn: string;

  @SpeakeasyMetadata({ data: "json, name=TransformJobName" })
  transformJobName: string;

  @SpeakeasyMetadata({ data: "json, name=TransformJobStatus" })
  transformJobStatus: TransformJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TransformOutput" })
  transformOutput?: TransformOutput;

  @SpeakeasyMetadata({ data: "json, name=TransformResources" })
  transformResources: TransformResources;

  @SpeakeasyMetadata({ data: "json, name=TransformStartTime" })
  transformStartTime?: Date;
}

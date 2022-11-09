import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchStrategyEnum } from "./batchstrategyenum";
import { DataProcessing } from "./dataprocessing";
import { ExperimentConfig } from "./experimentconfig";
import { ModelClientConfig } from "./modelclientconfig";
import { Tag } from "./tag";
import { TransformInput } from "./transforminput";
import { TransformJobStatusEnum } from "./transformjobstatusenum";
import { TransformOutput } from "./transformoutput";
import { TransformResources } from "./transformresources";


// TransformJob
/** 
 * A batch transform job. For information about SageMaker batch transform, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">Use Batch Transform</a>.
**/
export class TransformJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoMLJobArn" })
  autoMlJobArn?: string;

  @Metadata({ data: "json, name=BatchStrategy" })
  batchStrategy?: BatchStrategyEnum;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DataProcessing" })
  dataProcessing?: DataProcessing;

  @Metadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @Metadata({ data: "json, name=ExperimentConfig" })
  experimentConfig?: ExperimentConfig;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=LabelingJobArn" })
  labelingJobArn?: string;

  @Metadata({ data: "json, name=MaxConcurrentTransforms" })
  maxConcurrentTransforms?: number;

  @Metadata({ data: "json, name=MaxPayloadInMB" })
  maxPayloadInMb?: number;

  @Metadata({ data: "json, name=ModelClientConfig" })
  modelClientConfig?: ModelClientConfig;

  @Metadata({ data: "json, name=ModelName" })
  modelName?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TransformEndTime" })
  transformEndTime?: Date;

  @Metadata({ data: "json, name=TransformInput" })
  transformInput?: TransformInput;

  @Metadata({ data: "json, name=TransformJobArn" })
  transformJobArn?: string;

  @Metadata({ data: "json, name=TransformJobName" })
  transformJobName?: string;

  @Metadata({ data: "json, name=TransformJobStatus" })
  transformJobStatus?: TransformJobStatusEnum;

  @Metadata({ data: "json, name=TransformOutput" })
  transformOutput?: TransformOutput;

  @Metadata({ data: "json, name=TransformResources" })
  transformResources?: TransformResources;

  @Metadata({ data: "json, name=TransformStartTime" })
  transformStartTime?: Date;
}

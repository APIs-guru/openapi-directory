import { SpeakeasyBase } from "../../../internal/utils";
import { BatchStrategyEnum } from "./batchstrategyenum";
import { DataProcessing } from "./dataprocessing";
import { ExperimentConfig } from "./experimentconfig";
import { ModelClientConfig } from "./modelclientconfig";
import { Tag } from "./tag";
import { TransformInput } from "./transforminput";
import { TransformJobStatusEnum } from "./transformjobstatusenum";
import { TransformOutput } from "./transformoutput";
import { TransformResources } from "./transformresources";
/**
 * A batch transform job. For information about SageMaker batch transform, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">Use Batch Transform</a>.
**/
export declare class TransformJob extends SpeakeasyBase {
    autoMlJobArn?: string;
    batchStrategy?: BatchStrategyEnum;
    creationTime?: Date;
    dataProcessing?: DataProcessing;
    environment?: Map<string, string>;
    experimentConfig?: ExperimentConfig;
    failureReason?: string;
    labelingJobArn?: string;
    maxConcurrentTransforms?: number;
    maxPayloadInMb?: number;
    modelClientConfig?: ModelClientConfig;
    modelName?: string;
    tags?: Tag[];
    transformEndTime?: Date;
    transformInput?: TransformInput;
    transformJobArn?: string;
    transformJobName?: string;
    transformJobStatus?: TransformJobStatusEnum;
    transformOutput?: TransformOutput;
    transformResources?: TransformResources;
    transformStartTime?: Date;
}

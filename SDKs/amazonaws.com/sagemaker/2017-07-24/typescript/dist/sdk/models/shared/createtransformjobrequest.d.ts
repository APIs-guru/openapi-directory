import { SpeakeasyBase } from "../../../internal/utils";
import { BatchStrategyEnum } from "./batchstrategyenum";
import { DataProcessing } from "./dataprocessing";
import { ExperimentConfig } from "./experimentconfig";
import { ModelClientConfig } from "./modelclientconfig";
import { Tag } from "./tag";
import { TransformInput } from "./transforminput";
import { TransformOutput } from "./transformoutput";
import { TransformResources } from "./transformresources";
export declare class CreateTransformJobRequest extends SpeakeasyBase {
    batchStrategy?: BatchStrategyEnum;
    dataProcessing?: DataProcessing;
    environment?: Map<string, string>;
    experimentConfig?: ExperimentConfig;
    maxConcurrentTransforms?: number;
    maxPayloadInMb?: number;
    modelClientConfig?: ModelClientConfig;
    modelName: string;
    tags?: Tag[];
    transformInput: TransformInput;
    transformJobName: string;
    transformOutput: TransformOutput;
    transformResources: TransformResources;
}

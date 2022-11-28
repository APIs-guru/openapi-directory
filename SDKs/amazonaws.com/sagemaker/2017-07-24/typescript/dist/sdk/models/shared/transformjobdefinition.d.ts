import { SpeakeasyBase } from "../../../internal/utils";
import { BatchStrategyEnum } from "./batchstrategyenum";
import { TransformInput } from "./transforminput";
import { TransformOutput } from "./transformoutput";
import { TransformResources } from "./transformresources";
/**
 * Defines the input needed to run a transform job using the inference specification specified in the algorithm.
**/
export declare class TransformJobDefinition extends SpeakeasyBase {
    batchStrategy?: BatchStrategyEnum;
    environment?: Map<string, string>;
    maxConcurrentTransforms?: number;
    maxPayloadInMb?: number;
    transformInput: TransformInput;
    transformOutput: TransformOutput;
    transformResources: TransformResources;
}

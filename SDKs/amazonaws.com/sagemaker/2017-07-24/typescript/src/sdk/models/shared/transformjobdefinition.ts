import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchStrategyEnum } from "./batchstrategyenum";
import { TransformInput } from "./transforminput";
import { TransformOutput } from "./transformoutput";
import { TransformResources } from "./transformresources";


// TransformJobDefinition
/** 
 * Defines the input needed to run a transform job using the inference specification specified in the algorithm.
**/
export class TransformJobDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=BatchStrategy" })
  batchStrategy?: BatchStrategyEnum;

  @Metadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @Metadata({ data: "json, name=MaxConcurrentTransforms" })
  maxConcurrentTransforms?: number;

  @Metadata({ data: "json, name=MaxPayloadInMB" })
  maxPayloadInMb?: number;

  @Metadata({ data: "json, name=TransformInput" })
  transformInput: TransformInput;

  @Metadata({ data: "json, name=TransformOutput" })
  transformOutput: TransformOutput;

  @Metadata({ data: "json, name=TransformResources" })
  transformResources: TransformResources;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchStrategyEnum } from "./batchstrategyenum";
import { TransformInput } from "./transforminput";
import { TransformOutput } from "./transformoutput";
import { TransformResources } from "./transformresources";



// TransformJobDefinition
/** 
 * Defines the input needed to run a transform job using the inference specification specified in the algorithm.
**/
export class TransformJobDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BatchStrategy" })
  batchStrategy?: BatchStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=MaxConcurrentTransforms" })
  maxConcurrentTransforms?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxPayloadInMB" })
  maxPayloadInMb?: number;

  @SpeakeasyMetadata({ data: "json, name=TransformInput" })
  transformInput: TransformInput;

  @SpeakeasyMetadata({ data: "json, name=TransformOutput" })
  transformOutput: TransformOutput;

  @SpeakeasyMetadata({ data: "json, name=TransformResources" })
  transformResources: TransformResources;
}

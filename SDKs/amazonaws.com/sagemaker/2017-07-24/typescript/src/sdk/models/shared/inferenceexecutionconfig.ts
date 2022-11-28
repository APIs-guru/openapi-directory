import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InferenceExecutionModeEnum } from "./inferenceexecutionmodeenum";



// InferenceExecutionConfig
/** 
 * Specifies details about how containers in a multi-container endpoint are run.
**/
export class InferenceExecutionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Mode" })
  mode: InferenceExecutionModeEnum;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InferenceExecutionModeEnum } from "./inferenceexecutionmodeenum";


// InferenceExecutionConfig
/** 
 * Specifies details about how containers in a multi-container endpoint are run.
**/
export class InferenceExecutionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Mode" })
  mode: InferenceExecutionModeEnum;
}

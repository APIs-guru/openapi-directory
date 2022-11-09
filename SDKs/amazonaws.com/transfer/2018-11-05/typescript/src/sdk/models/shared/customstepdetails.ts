import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomStepDetails
/** 
 * Each step type has its own <code>StepDetails</code> structure.
**/
export class CustomStepDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Target" })
  target?: string;

  @Metadata({ data: "json, name=TimeoutSeconds" })
  timeoutSeconds?: number;
}

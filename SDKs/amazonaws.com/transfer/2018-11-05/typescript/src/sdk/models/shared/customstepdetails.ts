import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomStepDetails
/** 
 * Each step type has its own <code>StepDetails</code> structure.
**/
export class CustomStepDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Target" })
  target?: string;

  @SpeakeasyMetadata({ data: "json, name=TimeoutSeconds" })
  timeoutSeconds?: number;
}

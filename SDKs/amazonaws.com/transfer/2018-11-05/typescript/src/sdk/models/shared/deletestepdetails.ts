import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteStepDetails
/** 
 * The name of the step, used to identify the step that is being deleted.
**/
export class DeleteStepDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}

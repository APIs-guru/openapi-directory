import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteStepDetails
/** 
 * The name of the step, used to identify the step that is being deleted.
**/
export class DeleteStepDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;
}

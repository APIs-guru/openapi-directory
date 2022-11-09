import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UndeleteAlertRequest
/** 
 * A request to undelete a specific alert that was marked for deletion.
**/
export class UndeleteAlertRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerId" })
  customerId?: string;
}

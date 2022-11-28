import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UndeleteAlertRequest
/** 
 * A request to undelete a specific alert that was marked for deletion.
**/
export class UndeleteAlertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserFileKeySetRequest } from "./userfilekeysetrequest";



// UserFileKeySetBatchRequest
/** 
 * List of request models for setting a user file key(s)
**/
export class UserFileKeySetBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: UserFileKeySetRequest })
  items: UserFileKeySetRequest[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserFileKeySetRequest } from "./userfilekeysetrequest";


// UserFileKeySetBatchRequest
/** 
 * List of request models for setting a user file key(s)
**/
export class UserFileKeySetBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.UserFileKeySetRequest })
  items: UserFileKeySetRequest[];
}

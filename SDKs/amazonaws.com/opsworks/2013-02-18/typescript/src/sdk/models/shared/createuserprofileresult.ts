import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateUserProfileResult
/** 
 * Contains the response to a <code>CreateUserProfile</code> request.
**/
export class CreateUserProfileResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IamUserArn" })
  iamUserArn?: string;
}

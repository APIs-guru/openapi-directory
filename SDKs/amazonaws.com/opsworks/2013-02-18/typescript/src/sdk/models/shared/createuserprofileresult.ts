import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateUserProfileResult
/** 
 * Contains the response to a <code>CreateUserProfile</code> request.
**/
export class CreateUserProfileResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=IamUserArn" })
  iamUserArn?: string;
}

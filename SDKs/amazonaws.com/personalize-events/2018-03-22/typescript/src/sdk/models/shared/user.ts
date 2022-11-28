import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// User
/** 
 * Represents user metadata added to a Users dataset using the <code>PutUsers</code> API. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>.
**/
export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: any;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: string;
}

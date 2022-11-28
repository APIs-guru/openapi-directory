import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsIamAccessKeySessionContextAttributes } from "./awsiamaccesskeysessioncontextattributes";
import { AwsIamAccessKeySessionContextSessionIssuer } from "./awsiamaccesskeysessioncontextsessionissuer";



// AwsIamAccessKeySessionContext
/** 
 * Provides information about the session that the key was used for.
**/
export class AwsIamAccessKeySessionContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: AwsIamAccessKeySessionContextAttributes;

  @SpeakeasyMetadata({ data: "json, name=SessionIssuer" })
  sessionIssuer?: AwsIamAccessKeySessionContextSessionIssuer;
}

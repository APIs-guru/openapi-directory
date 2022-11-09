import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsIamAccessKeySessionContextAttributes } from "./awsiamaccesskeysessioncontextattributes";
import { AwsIamAccessKeySessionContextSessionIssuer } from "./awsiamaccesskeysessioncontextsessionissuer";


// AwsIamAccessKeySessionContext
/** 
 * Provides information about the session that the key was used for.
**/
export class AwsIamAccessKeySessionContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes" })
  attributes?: AwsIamAccessKeySessionContextAttributes;

  @Metadata({ data: "json, name=SessionIssuer" })
  sessionIssuer?: AwsIamAccessKeySessionContextSessionIssuer;
}

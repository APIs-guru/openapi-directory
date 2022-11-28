import { SpeakeasyBase } from "../../../internal/utils";
import { AwsIamAccessKeySessionContextAttributes } from "./awsiamaccesskeysessioncontextattributes";
import { AwsIamAccessKeySessionContextSessionIssuer } from "./awsiamaccesskeysessioncontextsessionissuer";
/**
 * Provides information about the session that the key was used for.
**/
export declare class AwsIamAccessKeySessionContext extends SpeakeasyBase {
    attributes?: AwsIamAccessKeySessionContextAttributes;
    sessionIssuer?: AwsIamAccessKeySessionContextSessionIssuer;
}

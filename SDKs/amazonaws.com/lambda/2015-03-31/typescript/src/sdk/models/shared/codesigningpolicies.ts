import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeSigningPolicyEnum } from "./codesigningpolicyenum";



// CodeSigningPolicies
/** 
 * Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.
**/
export class CodeSigningPolicies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UntrustedArtifactOnDeployment" })
  untrustedArtifactOnDeployment?: CodeSigningPolicyEnum;
}

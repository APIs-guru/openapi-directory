import { SpeakeasyBase } from "../../../internal/utils";
import { CodeSigningPolicyEnum } from "./codesigningpolicyenum";
/**
 * Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.
**/
export declare class CodeSigningPolicies extends SpeakeasyBase {
    untrustedArtifactOnDeployment?: CodeSigningPolicyEnum;
}

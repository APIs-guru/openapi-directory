import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the properties of a security policy that was specified. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies</a>.
**/
export declare class DescribedSecurityPolicy extends SpeakeasyBase {
    fips?: boolean;
    securityPolicyName: string;
    sshCiphers?: string[];
    sshKexs?: string[];
    sshMacs?: string[];
    tlsCiphers?: string[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribedSecurityPolicy
/** 
 * Describes the properties of a security policy that was specified. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies</a>.
**/
export class DescribedSecurityPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Fips" })
  fips?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SecurityPolicyName" })
  securityPolicyName: string;

  @SpeakeasyMetadata({ data: "json, name=SshCiphers" })
  sshCiphers?: string[];

  @SpeakeasyMetadata({ data: "json, name=SshKexs" })
  sshKexs?: string[];

  @SpeakeasyMetadata({ data: "json, name=SshMacs" })
  sshMacs?: string[];

  @SpeakeasyMetadata({ data: "json, name=TlsCiphers" })
  tlsCiphers?: string[];
}

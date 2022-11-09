import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribedSecurityPolicy
/** 
 * Describes the properties of a security policy that was specified. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies</a>.
**/
export class DescribedSecurityPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=Fips" })
  fips?: boolean;

  @Metadata({ data: "json, name=SecurityPolicyName" })
  securityPolicyName: string;

  @Metadata({ data: "json, name=SshCiphers" })
  sshCiphers?: string[];

  @Metadata({ data: "json, name=SshKexs" })
  sshKexs?: string[];

  @Metadata({ data: "json, name=SshMacs" })
  sshMacs?: string[];

  @Metadata({ data: "json, name=TlsCiphers" })
  tlsCiphers?: string[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SecurityHubConfiguration
/** 
 * Specifies configuration settings that determine which findings are published to Security Hub automatically. For information about how Macie publishes findings to Security Hub, see <a href="https://docs.aws.amazon.com/macie/latest/user/securityhub-integration.html">Amazon Macie integration with Security Hub</a> in the <i>Amazon Macie User Guide</i>.
**/
export class SecurityHubConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=publishClassificationFindings" })
  publishClassificationFindings: boolean;

  @Metadata({ data: "json, name=publishPolicyFindings" })
  publishPolicyFindings: boolean;
}

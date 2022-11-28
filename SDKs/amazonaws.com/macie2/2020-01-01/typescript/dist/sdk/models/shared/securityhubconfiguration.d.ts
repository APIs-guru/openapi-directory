import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies configuration settings that determine which findings are published to Security Hub automatically. For information about how Macie publishes findings to Security Hub, see <a href="https://docs.aws.amazon.com/macie/latest/user/securityhub-integration.html">Amazon Macie integration with Security Hub</a> in the <i>Amazon Macie User Guide</i>.
**/
export declare class SecurityHubConfiguration extends SpeakeasyBase {
    publishClassificationFindings: boolean;
    publishPolicyFindings: boolean;
}

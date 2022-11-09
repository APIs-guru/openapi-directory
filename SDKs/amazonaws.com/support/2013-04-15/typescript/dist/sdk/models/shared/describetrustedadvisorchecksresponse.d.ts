import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TrustedAdvisorCheckDescription } from "./trustedadvisorcheckdescription";
/**
 * Information about the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorChecks</a> operation.
**/
export declare class DescribeTrustedAdvisorChecksResponse extends SpeakeasyBase {
    checks: TrustedAdvisorCheckDescription[];
}

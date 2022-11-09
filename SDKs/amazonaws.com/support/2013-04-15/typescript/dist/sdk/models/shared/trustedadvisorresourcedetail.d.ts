import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Contains information about a resource identified by a Trusted Advisor check.
**/
export declare class TrustedAdvisorResourceDetail extends SpeakeasyBase {
    isSuppressed?: boolean;
    metadata: string[];
    region?: string;
    resourceId: string;
    status: string;
}

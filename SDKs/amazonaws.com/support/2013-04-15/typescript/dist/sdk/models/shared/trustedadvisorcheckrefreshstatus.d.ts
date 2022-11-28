import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The refresh status of a Trusted Advisor check.
**/
export declare class TrustedAdvisorCheckRefreshStatus extends SpeakeasyBase {
    checkId: string;
    millisUntilNextRefreshable: number;
    status: string;
}

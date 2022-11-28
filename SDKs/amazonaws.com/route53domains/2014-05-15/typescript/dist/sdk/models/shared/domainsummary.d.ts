import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Summary information about one domain.
**/
export declare class DomainSummary extends SpeakeasyBase {
    autoRenew?: boolean;
    domainName: string;
    expiry?: Date;
    transferLock?: boolean;
}

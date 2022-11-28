import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A <code>RenewDomain</code> request includes the number of years that you want to renew for and the current expiration year.
**/
export declare class RenewDomainRequest extends SpeakeasyBase {
    currentExpiryYear: number;
    domainName: string;
    durationInYears?: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that contains inbox placement data for email sent from one of your email domains to a specific email provider.
**/
export declare class DomainIspPlacement extends SpeakeasyBase {
    inboxPercentage?: number;
    inboxRawCount?: number;
    ispName?: string;
    spamPercentage?: number;
    spamRawCount?: number;
}

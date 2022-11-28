import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the content and "From" address for an email message that's sent to recipients of a campaign.
**/
export declare class CampaignEmailMessage extends SpeakeasyBase {
    body?: string;
    fromAddress?: string;
    htmlBody?: string;
    title?: string;
}

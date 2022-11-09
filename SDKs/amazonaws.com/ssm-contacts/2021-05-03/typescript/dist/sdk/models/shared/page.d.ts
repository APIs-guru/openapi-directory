import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Incident Manager engaging a contact's contact channel.
**/
export declare class Page extends SpeakeasyBase {
    contactArn: string;
    deliveryTime?: Date;
    engagementArn: string;
    incidentId?: string;
    pageArn: string;
    readTime?: Date;
    sender: string;
    sentTime?: Date;
}

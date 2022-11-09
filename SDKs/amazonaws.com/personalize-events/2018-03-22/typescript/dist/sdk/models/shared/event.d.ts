import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Represents user interaction event information sent using the <code>PutEvents</code> API.
**/
export declare class Event extends SpeakeasyBase {
    eventId?: string;
    eventType: string;
    eventValue?: number;
    impression?: string[];
    itemId?: string;
    properties?: any;
    recommendationId?: string;
    sentAt: Date;
}

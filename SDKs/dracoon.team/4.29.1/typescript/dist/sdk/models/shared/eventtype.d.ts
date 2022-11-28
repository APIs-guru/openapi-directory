import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Event type information
**/
export declare class EventType extends SpeakeasyBase {
    id: number;
    name: string;
    usableCustomerAdminWebhook: boolean;
    usableNodeWebhook: boolean;
    usablePushNotification: boolean;
    usableTenantWebhook: boolean;
}

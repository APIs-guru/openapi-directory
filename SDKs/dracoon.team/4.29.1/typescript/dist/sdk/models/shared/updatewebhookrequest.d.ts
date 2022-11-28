import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for updating a webhook
**/
export declare class UpdateWebhookRequest extends SpeakeasyBase {
    eventTypeNames?: string[];
    isEnabled?: boolean;
    name?: string;
    secret?: string;
    triggerExampleEvent?: boolean;
    url?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for creating a webhook
**/
export declare class CreateWebhookRequest extends SpeakeasyBase {
    eventTypeNames: string[];
    isEnabled?: boolean;
    name: string;
    secret?: string;
    triggerExampleEvent?: boolean;
    url: string;
}

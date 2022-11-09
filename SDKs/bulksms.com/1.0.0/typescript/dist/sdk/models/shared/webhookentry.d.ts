import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum WebhookEntryInvokeOptionEnum {
    One = "ONE",
    Many = "MANY"
}
export declare enum WebhookEntryTriggerScopeEnum {
    Sent = "SENT",
    Received = "RECEIVED"
}
export declare class WebhookEntry extends SpeakeasyBase {
    active?: boolean;
    contactEmailAddress?: string;
    invokeOption?: WebhookEntryInvokeOptionEnum;
    name: string;
    onWebApp?: boolean;
    triggerScope: WebhookEntryTriggerScopeEnum;
    url: string;
}

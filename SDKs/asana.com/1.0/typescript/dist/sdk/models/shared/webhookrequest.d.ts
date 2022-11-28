import { SpeakeasyBase } from "../../../internal/utils";
export declare class WebhookRequestFilters extends SpeakeasyBase {
    action?: string;
    fields?: string[];
    resourceSubtype?: string;
    resourceType?: string;
}
export declare class WebhookRequest extends SpeakeasyBase {
    filters?: WebhookRequestFilters[];
    resource: string;
    target: string;
}

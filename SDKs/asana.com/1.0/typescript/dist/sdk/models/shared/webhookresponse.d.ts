import { SpeakeasyBase } from "../../../internal/utils";
import { AsanaNamedResource } from "./asananamedresource";
export declare class WebhookResponseFilters extends SpeakeasyBase {
    action?: string;
    fields?: string[];
    resourceSubtype?: string;
    resourceType?: string;
}
export declare class WebhookResponse extends SpeakeasyBase {
    active?: boolean;
    createdAt?: Date;
    filters?: WebhookResponseFilters[];
    gid?: string;
    lastFailureAt?: Date;
    lastFailureContent?: string;
    lastSuccessAt?: Date;
    resource?: AsanaNamedResource;
    resourceType?: string;
    target?: string;
}

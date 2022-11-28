import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of webhook subscriptions
**/
export declare class PaginatedWebhookSubscriptions extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}

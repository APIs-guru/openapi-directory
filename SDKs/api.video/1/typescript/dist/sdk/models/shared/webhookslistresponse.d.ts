import { SpeakeasyBase } from "../../../internal/utils";
import { Webhook } from "./webhook";
import { Pagination } from "./pagination";
export declare class WebhooksListResponse extends SpeakeasyBase {
    data?: Webhook[];
    pagination?: Pagination;
}

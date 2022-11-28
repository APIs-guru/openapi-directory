import { SpeakeasyBase } from "../../../internal/utils";
import { Webhook } from "./webhook";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetWebhooksResponse extends SpeakeasyBase {
    data: Webhook[];
    links?: Links;
    meta?: Meta;
    status: string;
    statusCode: number;
}

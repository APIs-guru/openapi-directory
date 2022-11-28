import { SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetOrdersResponse extends SpeakeasyBase {
    data: Order[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}

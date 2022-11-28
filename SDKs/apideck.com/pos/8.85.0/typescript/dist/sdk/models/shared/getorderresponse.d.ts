import { SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";
export declare class GetOrderResponse extends SpeakeasyBase {
    data: Order;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}

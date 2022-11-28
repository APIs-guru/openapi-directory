import { SpeakeasyBase } from "../../../internal/utils";
import { OrderType } from "./ordertype";
export declare class GetOrderTypeResponse extends SpeakeasyBase {
    data: OrderType;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}

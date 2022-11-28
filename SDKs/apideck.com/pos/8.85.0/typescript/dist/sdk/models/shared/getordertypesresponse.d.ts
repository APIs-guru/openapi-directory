import { SpeakeasyBase } from "../../../internal/utils";
import { OrderType } from "./ordertype";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetOrderTypesResponse extends SpeakeasyBase {
    data: OrderType[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}

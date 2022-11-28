import { SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";
export declare class GetItemResponse extends SpeakeasyBase {
    data: Item;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}

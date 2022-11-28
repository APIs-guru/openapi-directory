import { SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetItemsResponse extends SpeakeasyBase {
    data: Item[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}

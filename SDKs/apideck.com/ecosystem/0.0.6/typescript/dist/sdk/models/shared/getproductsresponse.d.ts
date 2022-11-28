import { SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetProductsResponse extends SpeakeasyBase {
    data: Product[];
    links?: Links;
    meta?: Meta;
    status: string;
    statusCode: number;
}

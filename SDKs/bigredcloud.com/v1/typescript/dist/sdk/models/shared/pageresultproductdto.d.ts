import { SpeakeasyBase } from "../../../internal/utils";
import { ProductDto } from "./productdto";
export declare class PageResultProductDto extends SpeakeasyBase {
    count?: number;
    items?: ProductDto[];
    nextPageLink?: string;
}

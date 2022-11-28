import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerQueryDto } from "./customerquerydto";
export declare class PageResultCustomerQueryDto extends SpeakeasyBase {
    count?: number;
    items?: CustomerQueryDto[];
    nextPageLink?: string;
}

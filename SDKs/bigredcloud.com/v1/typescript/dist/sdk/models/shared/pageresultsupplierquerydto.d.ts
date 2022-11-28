import { SpeakeasyBase } from "../../../internal/utils";
import { SupplierQueryDto } from "./supplierquerydto";
export declare class PageResultSupplierQueryDto extends SpeakeasyBase {
    count?: number;
    items?: SupplierQueryDto[];
    nextPageLink?: string;
}

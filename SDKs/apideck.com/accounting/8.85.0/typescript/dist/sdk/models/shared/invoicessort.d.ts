import { SpeakeasyBase } from "../../../internal/utils";
import { SortDirectionEnum } from "./sortdirectionenum";
export declare enum InvoicesSortByEnum {
    UpdatedAt = "updated_at"
}
export declare class InvoicesSort extends SpeakeasyBase {
    by?: InvoicesSortByEnum;
    direction?: SortDirectionEnum;
}

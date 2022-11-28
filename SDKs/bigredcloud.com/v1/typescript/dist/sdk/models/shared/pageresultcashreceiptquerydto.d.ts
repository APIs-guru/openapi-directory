import { SpeakeasyBase } from "../../../internal/utils";
import { CashReceiptQueryDto } from "./cashreceiptquerydto";
export declare class PageResultCashReceiptQueryDto extends SpeakeasyBase {
    count?: number;
    items?: CashReceiptQueryDto[];
    nextPageLink?: string;
}

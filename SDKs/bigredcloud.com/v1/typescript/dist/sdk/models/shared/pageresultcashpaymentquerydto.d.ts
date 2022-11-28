import { SpeakeasyBase } from "../../../internal/utils";
import { CashPaymentQueryDto } from "./cashpaymentquerydto";
export declare class PageResultCashPaymentQueryDto extends SpeakeasyBase {
    count?: number;
    items?: CashPaymentQueryDto[];
    nextPageLink?: string;
}

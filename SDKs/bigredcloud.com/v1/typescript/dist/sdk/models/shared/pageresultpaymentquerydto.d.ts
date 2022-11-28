import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentQueryDto } from "./paymentquerydto";
export declare class PageResultPaymentQueryDto extends SpeakeasyBase {
    count?: number;
    items?: PaymentQueryDto[];
    nextPageLink?: string;
}

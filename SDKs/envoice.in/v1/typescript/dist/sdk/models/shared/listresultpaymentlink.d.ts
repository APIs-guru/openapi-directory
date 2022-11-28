import { SpeakeasyBase } from "../../../internal/utils";
import { IErrorInfo } from "./ierrorinfo";
import { PaymentLink } from "./paymentlink";
export declare class ListResultPaymentLink extends SpeakeasyBase {
    count?: number;
    errorMessages?: IErrorInfo[];
    isFaulted?: boolean;
    result?: PaymentLink[];
    totalCount?: number;
}

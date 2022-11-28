import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountTranDto extends SpeakeasyBase {
    bookTranId?: number;
    bookTranTypeId?: number;
    bookTransactionReference?: string;
    bookTypeDesc?: string;
    credit?: number;
    debit?: number;
    id?: number;
    procDate?: Date;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AcEntryDto } from "./acentrydto";
import { AcudfValueDto } from "./acudfvaluedto";
export declare class CashPaymentDto extends SpeakeasyBase {
    acCode?: string;
    acEntries?: AcEntryDto[];
    bankAccountCode?: string;
    bankAccountId?: number;
    bookTranTypeId?: number;
    customFields?: AcudfValueDto[];
    detailCollection?: string[];
    discount?: number;
    entryDate?: Date;
    id?: number;
    ledger?: number;
    lodgement?: number;
    note?: string;
    plaidTransactionId?: string;
    procDate?: Date;
    supplierId?: number;
    timestamp?: string;
    total?: number;
}

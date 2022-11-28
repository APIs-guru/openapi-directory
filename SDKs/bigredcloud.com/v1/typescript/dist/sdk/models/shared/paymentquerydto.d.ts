import { SpeakeasyBase } from "../../../internal/utils";
import { AcEntryDto } from "./acentrydto";
import { AcudfValueDto } from "./acudfvaluedto";
export declare class PaymentQueryDto extends SpeakeasyBase {
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
    note?: string;
    plaidTransactionId?: string;
    procDate?: Date;
    reference?: string;
    supplierId?: number;
    timestamp?: string;
    total?: number;
    transferBankCode?: string;
    transferBankId?: number;
    unallocated?: number;
}

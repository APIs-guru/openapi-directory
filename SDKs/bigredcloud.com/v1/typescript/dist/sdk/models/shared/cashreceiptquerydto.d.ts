import { SpeakeasyBase } from "../../../internal/utils";
import { AcEntryDto } from "./acentrydto";
import { AcudfValueDto } from "./acudfvaluedto";
import { VatEntryDto } from "./vatentrydto";
export declare class CashReceiptQueryDto extends SpeakeasyBase {
    acCode?: string;
    acEntries?: AcEntryDto[];
    bookTranTypeId?: number;
    customFields?: AcudfValueDto[];
    customerId?: number;
    detailCollection?: string[];
    discount?: number;
    entryDate?: Date;
    id?: number;
    ledger?: number;
    note?: string;
    plaidTransactionId?: string;
    procDate?: Date;
    timestamp?: string;
    total?: number;
    unallocated?: number;
    vatEntries?: VatEntryDto[];
    vatTypeId?: number;
}

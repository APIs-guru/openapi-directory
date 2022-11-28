import { SpeakeasyBase } from "../../../internal/utils";
import { AcEntryDto } from "./acentrydto";
import { AcudfValueDto } from "./acudfvaluedto";
import { VatEntryDto } from "./vatentrydto";
export declare class PurchaseDto extends SpeakeasyBase {
    acCode?: string;
    acEntries?: AcEntryDto[];
    bookTranTypeId?: number;
    customFields?: AcudfValueDto[];
    detailCollection?: string[];
    entryDate?: Date;
    id?: number;
    netGoods?: number;
    netServices?: number;
    note?: string;
    postponedAccounting?: boolean;
    procDate?: Date;
    reference?: string;
    supplierId?: number;
    timestamp?: string;
    total?: number;
    totalNet?: number;
    totalVat?: number;
    unallocated?: number;
    unpaid?: number;
    vatEntries?: VatEntryDto[];
    vatTypeId?: number;
}

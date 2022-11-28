import { SpeakeasyBase } from "../../../internal/utils";
import { AcEntryDto } from "./acentrydto";
import { AcudfValueDto } from "./acudfvaluedto";
import { VatEntryDto } from "./vatentrydto";
export declare class SalesEntryDto extends SpeakeasyBase {
    acCode?: string;
    acEntries?: AcEntryDto[];
    bookTranTypeId?: number;
    customFields?: AcudfValueDto[];
    customerId?: number;
    details?: string;
    entryDate?: Date;
    id?: number;
    netGoods?: number;
    netServices?: number;
    note?: string;
    procDate?: Date;
    reference?: string;
    timestamp?: string;
    total?: number;
    totalNet?: number;
    totalVat?: number;
    unpaid?: number;
    vatEntries?: VatEntryDto[];
    vatTypeId?: number;
}

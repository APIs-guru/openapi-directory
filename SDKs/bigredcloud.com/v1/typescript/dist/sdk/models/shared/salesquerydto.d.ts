import { SpeakeasyBase } from "../../../internal/utils";
import { AcEntryDto } from "./acentrydto";
import { AcudfValueDto } from "./acudfvaluedto";
import { VatEntryDto } from "./vatentrydto";
export declare class SalesQueryDto extends SpeakeasyBase {
    acCode?: string;
    acEntries?: AcEntryDto[];
    bookTranTypeId?: number;
    customFields?: AcudfValueDto[];
    customerId?: number;
    details?: string;
    entryDate?: Date;
    id?: number;
    loType?: string;
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

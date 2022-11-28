import { SpeakeasyBase } from "../../../internal/utils";
import { AcEntryDto } from "./acentrydto";
export declare class ProductTranQueryDto extends SpeakeasyBase {
    acEntries?: AcEntryDto[];
    amount?: number;
    amountNet?: number;
    id?: number;
    percentage?: number;
    productCode?: string;
    productId?: number;
    quantity?: number;
    tranNotes?: string[];
    unitPrice?: number;
    vat?: number;
    vatAnalysisTypeId?: number;
    vatRateId?: number;
}

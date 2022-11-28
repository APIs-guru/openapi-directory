import { SpeakeasyBase } from "../../../internal/utils";
import { QuoteAcEntriesDto } from "./quoteacentriesdto";
export declare class QuoteProductTransDto extends SpeakeasyBase {
    acEntries?: QuoteAcEntriesDto[];
    amount?: number;
    companyId?: number;
    id?: number;
    percentage?: number;
    productCode?: string;
    productId?: number;
    quantity?: number;
    tranNotes?: string[];
    unitPrice?: number;
    vatAmount?: number;
    vatAnalysisTypeId?: number;
    vatRateId?: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class CompanyOptionDto extends SpeakeasyBase {
    allowEntryOfGrossPriceInInvoicing?: boolean;
    creditInputForReverseChargeVat?: boolean;
    creditNoteJournalAgeingName?: string;
    creditNoteJournalAgeingValue?: number;
    discrepancyAllowed?: number;
    enableVocrReporting?: boolean;
    marginVatScheme?: boolean;
    printOsItemsOnly?: boolean;
    purchasesVatAnalysisType?: number;
    salesVatAnalysisType?: number;
    useAllocations?: boolean;
    useNominal?: boolean;
    useNominalCode?: boolean;
    vocrSettingValue?: boolean;
}

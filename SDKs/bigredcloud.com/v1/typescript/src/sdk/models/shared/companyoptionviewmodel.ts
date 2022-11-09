import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CompanyOptionViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowEntryOfGrossPriceInInvoicing" })
  allowEntryOfGrossPriceInInvoicing?: boolean;

  @Metadata({ data: "json, name=creditInputForReverseChargeVAT" })
  creditInputForReverseChargeVat?: boolean;

  @Metadata({ data: "json, name=creditNoteJournalAgeingName" })
  creditNoteJournalAgeingName?: string;

  @Metadata({ data: "json, name=creditNoteJournalAgeingValue" })
  creditNoteJournalAgeingValue?: number;

  @Metadata({ data: "json, name=discrepancyAllowed" })
  discrepancyAllowed?: number;

  @Metadata({ data: "json, name=enableVOCRReporting" })
  enableVocrReporting?: boolean;

  @Metadata({ data: "json, name=marginVatScheme" })
  marginVatScheme?: boolean;

  @Metadata({ data: "json, name=printOSItemsOnly" })
  printOsItemsOnly?: boolean;

  @Metadata({ data: "json, name=purchasesVatAnalysisType" })
  purchasesVatAnalysisType?: number;

  @Metadata({ data: "json, name=salesVatAnalysisType" })
  salesVatAnalysisType?: number;

  @Metadata({ data: "json, name=useAllocations" })
  useAllocations?: boolean;

  @Metadata({ data: "json, name=useNominal" })
  useNominal?: boolean;

  @Metadata({ data: "json, name=useNominalCode" })
  useNominalCode?: boolean;

  @Metadata({ data: "json, name=vocrSettingValue" })
  vocrSettingValue?: boolean;
}

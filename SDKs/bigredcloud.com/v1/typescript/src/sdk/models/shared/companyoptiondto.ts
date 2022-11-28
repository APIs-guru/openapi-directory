import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CompanyOptionDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowEntryOfGrossPriceInInvoicing" })
  allowEntryOfGrossPriceInInvoicing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=creditInputForReverseChargeVAT" })
  creditInputForReverseChargeVat?: boolean;

  @SpeakeasyMetadata({ data: "json, name=creditNoteJournalAgeingName" })
  creditNoteJournalAgeingName?: string;

  @SpeakeasyMetadata({ data: "json, name=creditNoteJournalAgeingValue" })
  creditNoteJournalAgeingValue?: number;

  @SpeakeasyMetadata({ data: "json, name=discrepancyAllowed" })
  discrepancyAllowed?: number;

  @SpeakeasyMetadata({ data: "json, name=enableVOCRReporting" })
  enableVocrReporting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=marginVatScheme" })
  marginVatScheme?: boolean;

  @SpeakeasyMetadata({ data: "json, name=printOSItemsOnly" })
  printOsItemsOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=purchasesVatAnalysisType" })
  purchasesVatAnalysisType?: number;

  @SpeakeasyMetadata({ data: "json, name=salesVatAnalysisType" })
  salesVatAnalysisType?: number;

  @SpeakeasyMetadata({ data: "json, name=useAllocations" })
  useAllocations?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useNominal" })
  useNominal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useNominalCode" })
  useNominalCode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=vocrSettingValue" })
  vocrSettingValue?: boolean;
}

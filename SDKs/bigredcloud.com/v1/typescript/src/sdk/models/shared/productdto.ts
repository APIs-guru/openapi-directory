import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string[];

  @Metadata({ data: "json, name=grossUnitPrice" })
  grossUnitPrice?: boolean;

  @Metadata({ data: "json, name=hasDefaultVatRate" })
  hasDefaultVatRate?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=stockCode" })
  stockCode?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=unitPrice" })
  unitPrice?: number;

  @Metadata({ data: "json, name=vatAnalysisTypeId" })
  vatAnalysisTypeId?: number;

  @Metadata({ data: "json, name=vatRateId" })
  vatRateId?: number;
}

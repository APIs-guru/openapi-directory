import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string[];

  @SpeakeasyMetadata({ data: "json, name=grossUnitPrice" })
  grossUnitPrice?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasDefaultVatRate" })
  hasDefaultVatRate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=stockCode" })
  stockCode?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=unitPrice" })
  unitPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=vatAnalysisTypeId" })
  vatAnalysisTypeId?: number;

  @SpeakeasyMetadata({ data: "json, name=vatRateId" })
  vatRateId?: number;
}

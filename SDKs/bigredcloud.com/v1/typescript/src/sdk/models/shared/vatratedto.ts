import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VatRateDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isDefault" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=orderIndex" })
  orderIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage?: number;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=vatCategoryId" })
  vatCategoryId?: number;
}

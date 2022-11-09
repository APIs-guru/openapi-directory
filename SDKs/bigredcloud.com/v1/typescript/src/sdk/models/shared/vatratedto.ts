import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VatRateDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @Metadata({ data: "json, name=isDefault" })
  isDefault?: boolean;

  @Metadata({ data: "json, name=orderIndex" })
  orderIndex?: number;

  @Metadata({ data: "json, name=percentage" })
  percentage?: number;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=vatCategoryId" })
  vatCategoryId?: number;
}

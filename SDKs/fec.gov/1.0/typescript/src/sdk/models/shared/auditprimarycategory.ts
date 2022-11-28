import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuditPrimaryCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary_category_id" })
  primaryCategoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_category_name" })
  primaryCategoryName?: string;
}

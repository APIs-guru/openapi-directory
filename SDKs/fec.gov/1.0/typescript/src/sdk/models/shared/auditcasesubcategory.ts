import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuditCaseSubCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sub_category_id" })
  subCategoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=sub_category_name" })
  subCategoryName?: string;
}

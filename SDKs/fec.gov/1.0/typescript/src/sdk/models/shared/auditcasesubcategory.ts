import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuditCaseSubCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=sub_category_id" })
  subCategoryId?: string;

  @Metadata({ data: "json, name=sub_category_name" })
  subCategoryName?: string;
}

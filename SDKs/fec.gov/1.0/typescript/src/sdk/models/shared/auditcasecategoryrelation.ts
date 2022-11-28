import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditCaseSubCategory } from "./auditcasesubcategory";



export class AuditCaseCategoryRelation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary_category_id" })
  primaryCategoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_category_name" })
  primaryCategoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=sub_category_list", elemType: AuditCaseSubCategory })
  subCategoryList?: AuditCaseSubCategory[];
}

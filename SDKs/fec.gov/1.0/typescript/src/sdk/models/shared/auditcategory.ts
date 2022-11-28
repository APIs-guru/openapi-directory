import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditCategoryRelation } from "./auditcategoryrelation";



export class AuditCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary_category_id" })
  primaryCategoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_category_name" })
  primaryCategoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=sub_category_list", elemType: AuditCategoryRelation })
  subCategoryList?: AuditCategoryRelation[];
}

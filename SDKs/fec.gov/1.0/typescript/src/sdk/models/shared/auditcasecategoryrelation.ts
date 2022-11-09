import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuditCaseSubCategory } from "./auditcasesubcategory";


export class AuditCaseCategoryRelation extends SpeakeasyBase {
  @Metadata({ data: "json, name=primary_category_id" })
  primaryCategoryId?: string;

  @Metadata({ data: "json, name=primary_category_name" })
  primaryCategoryName?: string;

  @Metadata({ data: "json, name=sub_category_list", elemType: shared.AuditCaseSubCategory })
  subCategoryList?: AuditCaseSubCategory[];
}

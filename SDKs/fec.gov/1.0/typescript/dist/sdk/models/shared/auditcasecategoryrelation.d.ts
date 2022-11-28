import { SpeakeasyBase } from "../../../internal/utils";
import { AuditCaseSubCategory } from "./auditcasesubcategory";
export declare class AuditCaseCategoryRelation extends SpeakeasyBase {
    primaryCategoryId?: string;
    primaryCategoryName?: string;
    subCategoryList?: AuditCaseSubCategory[];
}

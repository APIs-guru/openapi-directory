import { SpeakeasyBase } from "../../../internal/utils";
import { AuditCategoryRelation } from "./auditcategoryrelation";
export declare class AuditCategory extends SpeakeasyBase {
    primaryCategoryId?: string;
    primaryCategoryName?: string;
    subCategoryList?: AuditCategoryRelation[];
}

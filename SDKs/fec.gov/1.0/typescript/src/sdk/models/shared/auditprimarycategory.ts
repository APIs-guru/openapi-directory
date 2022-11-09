import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuditPrimaryCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=primary_category_id" })
  primaryCategoryId?: string;

  @Metadata({ data: "json, name=primary_category_name" })
  primaryCategoryName?: string;
}

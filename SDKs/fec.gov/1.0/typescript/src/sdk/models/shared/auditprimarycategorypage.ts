import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { AuditPrimaryCategory } from "./auditprimarycategory";



export class AuditPrimaryCategoryPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: AuditPrimaryCategory })
  results?: AuditPrimaryCategory[];
}

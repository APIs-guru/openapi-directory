import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OffsetInfo } from "./offsetinfo";
import { AuditPrimaryCategory } from "./auditprimarycategory";


export class AuditPrimaryCategoryPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: shared.AuditPrimaryCategory })
  results?: AuditPrimaryCategory[];
}

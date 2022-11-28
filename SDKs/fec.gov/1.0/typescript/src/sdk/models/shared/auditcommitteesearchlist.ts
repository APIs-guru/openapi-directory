import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditCommitteeSearch } from "./auditcommitteesearch";



export class AuditCommitteeSearchList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: AuditCommitteeSearch })
  results?: AuditCommitteeSearch[];
}

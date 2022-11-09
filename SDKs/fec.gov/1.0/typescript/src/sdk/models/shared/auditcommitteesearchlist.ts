import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuditCommitteeSearch } from "./auditcommitteesearch";


export class AuditCommitteeSearchList extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.AuditCommitteeSearch })
  results?: AuditCommitteeSearch[];
}

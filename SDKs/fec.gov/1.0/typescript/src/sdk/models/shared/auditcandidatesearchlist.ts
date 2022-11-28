import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditCandidateSearch } from "./auditcandidatesearch";



export class AuditCandidateSearchList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: AuditCandidateSearch })
  results?: AuditCandidateSearch[];
}

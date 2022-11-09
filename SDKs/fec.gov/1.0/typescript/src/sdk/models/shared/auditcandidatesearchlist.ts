import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuditCandidateSearch } from "./auditcandidatesearch";


export class AuditCandidateSearchList extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.AuditCandidateSearch })
  results?: AuditCandidateSearch[];
}

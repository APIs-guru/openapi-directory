import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuditCaseCategoryRelation } from "./auditcasecategoryrelation";


export class AuditCase extends SpeakeasyBase {
  @Metadata({ data: "json, name=audit_case_id" })
  auditCaseId?: string;

  @Metadata({ data: "json, name=audit_id" })
  auditId?: number;

  @Metadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @Metadata({ data: "json, name=candidate_name" })
  candidateName?: string;

  @Metadata({ data: "json, name=committee_description" })
  committeeDescription?: string;

  @Metadata({ data: "json, name=committee_designation" })
  committeeDesignation?: string;

  @Metadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @Metadata({ data: "json, name=committee_name" })
  committeeName?: string;

  @Metadata({ data: "json, name=committee_type" })
  committeeType?: string;

  @Metadata({ data: "json, name=cycle" })
  cycle?: number;

  @Metadata({ data: "json, name=far_release_date" })
  farReleaseDate?: Date;

  @Metadata({ data: "json, name=link_to_report" })
  linkToReport?: string;

  @Metadata({ data: "json, name=primary_category_list", elemType: shared.AuditCaseCategoryRelation })
  primaryCategoryList?: AuditCaseCategoryRelation[];
}

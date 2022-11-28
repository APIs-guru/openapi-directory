import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditCaseCategoryRelation } from "./auditcasecategoryrelation";



export class AuditCase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audit_case_id" })
  auditCaseId?: string;

  @SpeakeasyMetadata({ data: "json, name=audit_id" })
  auditId?: number;

  @SpeakeasyMetadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_name" })
  candidateName?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_description" })
  committeeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_designation" })
  committeeDesignation?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_name" })
  committeeName?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_type" })
  committeeType?: string;

  @SpeakeasyMetadata({ data: "json, name=cycle" })
  cycle?: number;

  @SpeakeasyMetadata({ data: "json, name=far_release_date" })
  farReleaseDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=link_to_report" })
  linkToReport?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_category_list", elemType: AuditCaseCategoryRelation })
  primaryCategoryList?: AuditCaseCategoryRelation[];
}

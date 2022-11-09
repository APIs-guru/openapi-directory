import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAuditCaseQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=audit_case_id" })
  auditCaseId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=audit_id" })
  auditId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_id" })
  candidateId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=committee_designation" })
  committeeDesignation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=committee_type" })
  committeeType?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_election_cycle" })
  maxElectionCycle?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_election_cycle" })
  minElectionCycle?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=primary_category_id" })
  primaryCategoryId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=qq" })
  qq?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sub_category_id" })
  subCategoryId?: string;
}


export class GetAuditCaseRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAuditCaseQueryParams;
}


export class GetAuditCaseResponse extends SpeakeasyBase {
  @Metadata()
  auditCasePage?: shared.AuditCasePage;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

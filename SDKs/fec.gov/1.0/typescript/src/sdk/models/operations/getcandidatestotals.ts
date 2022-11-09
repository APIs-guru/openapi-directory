import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetCandidatesTotalsOfficeEnum {
    Unknown = ""
,    H = "H"
,    S = "S"
,    P = "P"
}


export class GetCandidatesTotalsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_id" })
  candidateId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=district" })
  district?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=election_full" })
  electionFull?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=election_year" })
  electionYear?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=federal_funds_flag" })
  federalFundsFlag?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=has_raised_funds" })
  hasRaisedFunds?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_active_candidate" })
  isActiveCandidate?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_cash_on_hand_end_period" })
  maxCashOnHandEndPeriod?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_debts_owed_by_committee" })
  maxDebtsOwedByCommittee?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_disbursements" })
  maxDisbursements?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_receipts" })
  maxReceipts?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_cash_on_hand_end_period" })
  minCashOnHandEndPeriod?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_debts_owed_by_committee" })
  minDebtsOwedByCommittee?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_disbursements" })
  minDisbursements?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_receipts" })
  minReceipts?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=office" })
  office?: GetCandidatesTotalsOfficeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=party" })
  party?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string[];
}


export class GetCandidatesTotalsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCandidatesTotalsQueryParams;
}


export class GetCandidatesTotalsResponse extends SpeakeasyBase {
  @Metadata()
  candidateHistoryTotalPage?: shared.CandidateHistoryTotalPage;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

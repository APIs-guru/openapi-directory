import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetCandidatesTotalsOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}


export class GetCandidatesTotalsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_id" })
  candidateId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=district" })
  district?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_full" })
  electionFull?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_year" })
  electionYear?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=federal_funds_flag" })
  federalFundsFlag?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=has_raised_funds" })
  hasRaisedFunds?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_active_candidate" })
  isActiveCandidate?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_cash_on_hand_end_period" })
  maxCashOnHandEndPeriod?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_debts_owed_by_committee" })
  maxDebtsOwedByCommittee?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_disbursements" })
  maxDisbursements?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_receipts" })
  maxReceipts?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_cash_on_hand_end_period" })
  minCashOnHandEndPeriod?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_debts_owed_by_committee" })
  minDebtsOwedByCommittee?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_disbursements" })
  minDisbursements?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_receipts" })
  minReceipts?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=office" })
  office?: GetCandidatesTotalsOfficeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=party" })
  party?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string[];
}


export class GetCandidatesTotalsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCandidatesTotalsQueryParams;
}


export class GetCandidatesTotalsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  candidateHistoryTotalPage?: shared.CandidateHistoryTotalPage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

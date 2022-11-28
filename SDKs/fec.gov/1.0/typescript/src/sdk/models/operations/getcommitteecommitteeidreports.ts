import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCommitteeCommitteeIdReportsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=committee_id" })
  committeeId: string;
}


export class GetCommitteeCommitteeIdReportsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=beginning_image_number" })
  beginningImageNumber?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_id" })
  candidateId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_amended" })
  isAmended?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_cash_on_hand_end_period_amount" })
  maxCashOnHandEndPeriodAmount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_debts_owed_expenditures" })
  maxDebtsOwedExpenditures?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_disbursements_amount" })
  maxDisbursementsAmount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_independent_expenditures" })
  maxIndependentExpenditures?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_party_coordinated_expenditures" })
  maxPartyCoordinatedExpenditures?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_receipts_amount" })
  maxReceiptsAmount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_total_contributions" })
  maxTotalContributions?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_cash_on_hand_end_period_amount" })
  minCashOnHandEndPeriodAmount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_debts_owed_amount" })
  minDebtsOwedAmount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_disbursements_amount" })
  minDisbursementsAmount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_independent_expenditures" })
  minIndependentExpenditures?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_party_coordinated_expenditures" })
  minPartyCoordinatedExpenditures?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_receipts_amount" })
  minReceiptsAmount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_total_contributions" })
  minTotalContributions?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_type" })
  reportType?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number[];
}


export class GetCommitteeCommitteeIdReportsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCommitteeCommitteeIdReportsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCommitteeCommitteeIdReportsQueryParams;
}


export class GetCommitteeCommitteeIdReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  committeeReportsPage?: shared.CommitteeReportsPage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

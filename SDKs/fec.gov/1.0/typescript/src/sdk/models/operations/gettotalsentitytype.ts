import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetTotalsEntityTypeEntityTypeEnum {
    Presidential = "presidential",
    Pac = "pac",
    Party = "party",
    PacParty = "pac-party",
    HouseSenate = "house-senate",
    IeOnly = "ie-only"
}


export class GetTotalsEntityTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entity_type" })
  entityType: GetTotalsEntityTypeEntityTypeEnum;
}

export enum GetTotalsEntityTypeFilingFrequencyEnum {
    Unknown = "",
    A = "A",
    M = "M",
    N = "N",
    Q = "Q",
    T = "T",
    W = "W",
    MinusA = "-A",
    MinusT = "-T"
}

export enum GetTotalsEntityTypeOrganizationTypeEnum {
    Unknown = "",
    C = "C",
    L = "L",
    M = "M",
    T = "T",
    V = "V",
    W = "W"
}


export class GetTotalsEntityTypeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_designation" })
  committeeDesignation?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_state" })
  committeeState?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_type" })
  committeeType?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filing_frequency" })
  filingFrequency?: GetTotalsEntityTypeFilingFrequencyEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_disbursements" })
  maxDisbursements?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_last_cash_on_hand_end_period" })
  maxLastCashOnHandEndPeriod?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_last_debts_owed_by_committee" })
  maxLastDebtsOwedByCommittee?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_receipts" })
  maxReceipts?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_disbursements" })
  minDisbursements?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_last_cash_on_hand_end_period" })
  minLastCashOnHandEndPeriod?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_last_debts_owed_by_committee" })
  minLastDebtsOwedByCommittee?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_receipts" })
  minReceipts?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=organization_type" })
  organizationType?: GetTotalsEntityTypeOrganizationTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sponsor_candidate_id" })
  sponsorCandidateId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=treasurer_name" })
  treasurerName?: string[];
}


export class GetTotalsEntityTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTotalsEntityTypePathParams;

  @SpeakeasyMetadata()
  queryParams: GetTotalsEntityTypeQueryParams;
}


export class GetTotalsEntityTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  committeeTotalsPage?: shared.CommitteeTotalsPage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

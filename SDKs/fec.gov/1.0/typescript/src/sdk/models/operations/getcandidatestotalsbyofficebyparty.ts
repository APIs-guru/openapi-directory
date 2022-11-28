import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetCandidatesTotalsByOfficeByPartyOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}


export class GetCandidatesTotalsByOfficeByPartyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_year" })
  electionYear?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_active_candidate" })
  isActiveCandidate?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=office" })
  office?: GetCandidatesTotalsByOfficeByPartyOfficeEnum;

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
}


export class GetCandidatesTotalsByOfficeByPartyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCandidatesTotalsByOfficeByPartyQueryParams;
}


export class GetCandidatesTotalsByOfficeByPartyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  totalByOfficeByPartyPage?: shared.TotalByOfficeByPartyPage;
}

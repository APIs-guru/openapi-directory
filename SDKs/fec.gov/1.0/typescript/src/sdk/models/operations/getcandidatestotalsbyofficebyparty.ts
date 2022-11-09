import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetCandidatesTotalsByOfficeByPartyOfficeEnum {
    Unknown = ""
,    H = "H"
,    S = "S"
,    P = "P"
}


export class GetCandidatesTotalsByOfficeByPartyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=election_year" })
  electionYear?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_active_candidate" })
  isActiveCandidate?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=office" })
  office?: GetCandidatesTotalsByOfficeByPartyOfficeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;
}


export class GetCandidatesTotalsByOfficeByPartyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCandidatesTotalsByOfficeByPartyQueryParams;
}


export class GetCandidatesTotalsByOfficeByPartyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  totalByOfficeByPartyPage?: shared.TotalByOfficeByPartyPage;
}

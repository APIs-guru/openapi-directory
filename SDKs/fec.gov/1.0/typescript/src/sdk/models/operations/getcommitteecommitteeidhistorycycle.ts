import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCommitteeCommitteeIdHistoryCyclePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=committee_id" })
  committeeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=cycle" })
  cycle: number;
}

export enum GetCommitteeCommitteeIdHistoryCycleDesignationEnum {
    Unknown = ""
,    A = "A"
,    J = "J"
,    P = "P"
,    U = "U"
,    B = "B"
,    D = "D"
}


export class GetCommitteeCommitteeIdHistoryCycleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=designation" })
  designation?: GetCommitteeCommitteeIdHistoryCycleDesignationEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=election_full" })
  electionFull?: boolean;

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


export class GetCommitteeCommitteeIdHistoryCycleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCommitteeCommitteeIdHistoryCyclePathParams;

  @Metadata()
  queryParams: GetCommitteeCommitteeIdHistoryCycleQueryParams;
}


export class GetCommitteeCommitteeIdHistoryCycleResponse extends SpeakeasyBase {
  @Metadata()
  committeeHistoryPage?: shared.CommitteeHistoryPage;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

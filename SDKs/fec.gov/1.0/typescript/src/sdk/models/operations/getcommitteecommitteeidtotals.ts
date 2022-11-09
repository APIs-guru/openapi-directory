import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCommitteeCommitteeIdTotalsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=committee_id" })
  committeeId: string;
}


export class GetCommitteeCommitteeIdTotalsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle?: number[];

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


export class GetCommitteeCommitteeIdTotalsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCommitteeCommitteeIdTotalsPathParams;

  @Metadata()
  queryParams: GetCommitteeCommitteeIdTotalsQueryParams;
}


export class GetCommitteeCommitteeIdTotalsResponse extends SpeakeasyBase {
  @Metadata()
  committeeTotalsPage?: shared.CommitteeTotalsPage;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

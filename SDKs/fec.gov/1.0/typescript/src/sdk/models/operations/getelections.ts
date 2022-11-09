import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetElectionsOfficeEnum {
    House = "house"
,    Senate = "senate"
,    President = "president"
}


export class GetElectionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=district" })
  district?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=election_full" })
  electionFull?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=office" })
  office: GetElectionsOfficeEnum;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;
}


export class GetElectionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetElectionsQueryParams;
}


export class GetElectionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  electionPage?: shared.ElectionPage;

  @Metadata()
  statusCode: number;
}

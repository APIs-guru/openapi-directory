import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetStateElectionOfficeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

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
  state: string;
}


export class GetStateElectionOfficeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetStateElectionOfficeQueryParams;
}


export class GetStateElectionOfficeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  stateElectionOfficeInfoPage?: shared.StateElectionOfficeInfoPage;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AccountGetGuestsSortDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}


export class AccountGetGuestsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortDirection" })
  sortDirection?: AccountGetGuestsSortDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=textSearch" })
  textSearch?: string;
}


export class AccountGetGuestsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AccountGetGuestsQueryParams;
}


export class AccountGetGuestsResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

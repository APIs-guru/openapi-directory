import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AccountGetGuestsSortDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}


export class AccountGetGuestsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortDirection" })
  sortDirection?: AccountGetGuestsSortDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textSearch" })
  textSearch?: string;
}


export class AccountGetGuestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AccountGetGuestsQueryParams;
}


export class AccountGetGuestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

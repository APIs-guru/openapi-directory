import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetPlayersSortByEnum {
    CreatedAt = "createdAt",
    UpdatedAt = "updatedAt"
}

export enum GetPlayersSortOrderEnum {
    Asc = "asc",
    Desc = "desc"
}


export class GetPlayersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentPage" })
  currentPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: GetPlayersSortByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: GetPlayersSortOrderEnum;
}


export class GetPlayersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetPlayersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPlayersQueryParams;

  @SpeakeasyMetadata()
  security: GetPlayersSecurity;
}


export class GetPlayersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  badRequest?: shared.BadRequest;

  @SpeakeasyMetadata()
  playersListResponse?: shared.PlayersListResponse;
}

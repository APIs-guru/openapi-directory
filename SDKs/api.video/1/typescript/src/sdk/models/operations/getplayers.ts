import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetPlayersSortByEnum {
    CreatedAt = "createdAt"
,    UpdatedAt = "updatedAt"
}

export enum GetPlayersSortOrderEnum {
    Asc = "asc"
,    Desc = "desc"
}


export class GetPlayersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=currentPage" })
  currentPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: GetPlayersSortByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: GetPlayersSortOrderEnum;
}


export class GetPlayersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetPlayersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPlayersQueryParams;

  @Metadata()
  security: GetPlayersSecurity;
}


export class GetPlayersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  badRequest?: shared.BadRequest;

  @Metadata()
  playersListResponse?: shared.PlayersListResponse;
}

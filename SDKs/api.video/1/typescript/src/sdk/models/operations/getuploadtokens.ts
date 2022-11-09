import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetUploadTokensSortByEnum {
    CreatedAt = "createdAt"
,    Ttl = "ttl"
}

export enum GetUploadTokensSortOrderEnum {
    Asc = "asc"
,    Desc = "desc"
}


export class GetUploadTokensQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=currentPage" })
  currentPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: GetUploadTokensSortByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: GetUploadTokensSortOrderEnum;
}


export class GetUploadTokensSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetUploadTokensRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUploadTokensQueryParams;

  @Metadata()
  security: GetUploadTokensSecurity;
}


export class GetUploadTokensResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tokenListResponse?: shared.TokenListResponse;
}

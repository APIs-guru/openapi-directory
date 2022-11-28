import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetUploadTokensSortByEnum {
    CreatedAt = "createdAt",
    Ttl = "ttl"
}

export enum GetUploadTokensSortOrderEnum {
    Asc = "asc",
    Desc = "desc"
}


export class GetUploadTokensQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentPage" })
  currentPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: GetUploadTokensSortByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: GetUploadTokensSortOrderEnum;
}


export class GetUploadTokensSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetUploadTokensRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUploadTokensQueryParams;

  @SpeakeasyMetadata()
  security: GetUploadTokensSecurity;
}


export class GetUploadTokensResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tokenListResponse?: shared.TokenListResponse;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetLiveStreamsSortOrderEnum {
    Asc = "asc"
,    Desc = "desc"
}


export class GetLiveStreamsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=currentPage" })
  currentPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: GetLiveStreamsSortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=streamKey" })
  streamKey?: string;
}


export class GetLiveStreamsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetLiveStreamsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLiveStreamsQueryParams;

  @Metadata()
  security: GetLiveStreamsSecurity;
}


export class GetLiveStreamsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  liveStreamListResponse?: shared.LiveStreamListResponse;
}

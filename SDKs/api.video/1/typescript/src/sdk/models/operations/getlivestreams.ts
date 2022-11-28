import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetLiveStreamsSortOrderEnum {
    Asc = "asc",
    Desc = "desc"
}


export class GetLiveStreamsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentPage" })
  currentPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: GetLiveStreamsSortOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=streamKey" })
  streamKey?: string;
}


export class GetLiveStreamsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetLiveStreamsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLiveStreamsQueryParams;

  @SpeakeasyMetadata()
  security: GetLiveStreamsSecurity;
}


export class GetLiveStreamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  liveStreamListResponse?: shared.LiveStreamListResponse;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListVideosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentPage" })
  currentPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=liveStreamId" })
  liveStreamId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metadata" })
  metadata?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=title" })
  title?: string;
}


export class ListVideosSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ListVideosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListVideosQueryParams;

  @SpeakeasyMetadata()
  security: ListVideosSecurity;
}


export class ListVideosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  badRequest?: shared.BadRequest;

  @SpeakeasyMetadata()
  videosListResponse?: shared.VideosListResponse;
}

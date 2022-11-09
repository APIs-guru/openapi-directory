import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListVideosQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=currentPage" })
  currentPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=liveStreamId" })
  liveStreamId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=metadata" })
  metadata?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=title" })
  title?: string;
}


export class ListVideosSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ListVideosRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListVideosQueryParams;

  @Metadata()
  security: ListVideosSecurity;
}


export class ListVideosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  badRequest?: shared.BadRequest;

  @Metadata()
  videosListResponse?: shared.VideosListResponse;
}

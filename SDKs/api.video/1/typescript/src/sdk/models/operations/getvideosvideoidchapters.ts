import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVideosVideoIdChaptersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class GetVideosVideoIdChaptersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=currentPage" })
  currentPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetVideosVideoIdChaptersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetVideosVideoIdChaptersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVideosVideoIdChaptersPathParams;

  @Metadata()
  queryParams: GetVideosVideoIdChaptersQueryParams;

  @Metadata()
  security: GetVideosVideoIdChaptersSecurity;
}


export class GetVideosVideoIdChaptersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  chaptersListResponse?: shared.ChaptersListResponse;

  @Metadata()
  notFound?: shared.NotFound;
}

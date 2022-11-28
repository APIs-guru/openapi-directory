import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVideosVideoIdChaptersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class GetVideosVideoIdChaptersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentPage" })
  currentPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetVideosVideoIdChaptersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetVideosVideoIdChaptersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideosVideoIdChaptersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetVideosVideoIdChaptersQueryParams;

  @SpeakeasyMetadata()
  security: GetVideosVideoIdChaptersSecurity;
}


export class GetVideosVideoIdChaptersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  chaptersListResponse?: shared.ChaptersListResponse;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;
}

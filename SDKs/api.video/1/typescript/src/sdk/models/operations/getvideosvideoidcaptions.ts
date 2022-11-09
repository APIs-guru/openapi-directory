import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVideosVideoIdCaptionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class GetVideosVideoIdCaptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=currentPage" })
  currentPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetVideosVideoIdCaptionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetVideosVideoIdCaptionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVideosVideoIdCaptionsPathParams;

  @Metadata()
  queryParams: GetVideosVideoIdCaptionsQueryParams;

  @Metadata()
  security: GetVideosVideoIdCaptionsSecurity;
}


export class GetVideosVideoIdCaptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  captionsListResponse?: shared.CaptionsListResponse;

  @Metadata()
  notFound?: shared.NotFound;
}

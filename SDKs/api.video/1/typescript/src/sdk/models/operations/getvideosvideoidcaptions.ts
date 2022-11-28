import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVideosVideoIdCaptionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class GetVideosVideoIdCaptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentPage" })
  currentPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetVideosVideoIdCaptionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetVideosVideoIdCaptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideosVideoIdCaptionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetVideosVideoIdCaptionsQueryParams;

  @SpeakeasyMetadata()
  security: GetVideosVideoIdCaptionsSecurity;
}


export class GetVideosVideoIdCaptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  captionsListResponse?: shared.CaptionsListResponse;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;
}

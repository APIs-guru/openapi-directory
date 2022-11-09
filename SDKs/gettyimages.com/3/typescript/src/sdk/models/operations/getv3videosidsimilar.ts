import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3VideosIdSimilarPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetV3VideosIdSimilarQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.BlendedVideosFieldValuesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetV3VideosIdSimilarHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3VideosIdSimilarRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV3VideosIdSimilarPathParams;

  @Metadata()
  queryParams: GetV3VideosIdSimilarQueryParams;

  @Metadata()
  headers: GetV3VideosIdSimilarHeaders;
}


export class GetV3VideosIdSimilarResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

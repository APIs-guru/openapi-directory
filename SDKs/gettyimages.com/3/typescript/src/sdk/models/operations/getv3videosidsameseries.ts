import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3VideosIdSameSeriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetV3VideosIdSameSeriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.BlendedVideosFieldValuesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetV3VideosIdSameSeriesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3VideosIdSameSeriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV3VideosIdSameSeriesPathParams;

  @Metadata()
  queryParams: GetV3VideosIdSameSeriesQueryParams;

  @Metadata()
  headers: GetV3VideosIdSameSeriesHeaders;
}


export class GetV3VideosIdSameSeriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

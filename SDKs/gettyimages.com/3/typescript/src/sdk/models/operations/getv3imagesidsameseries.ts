import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3ImagesIdSameSeriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetV3ImagesIdSameSeriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.ImagesFieldValuesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetV3ImagesIdSameSeriesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3ImagesIdSameSeriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV3ImagesIdSameSeriesPathParams;

  @Metadata()
  queryParams: GetV3ImagesIdSameSeriesQueryParams;

  @Metadata()
  headers: GetV3ImagesIdSameSeriesHeaders;
}


export class GetV3ImagesIdSameSeriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  imageSearchItemSearchResults?: shared.ImageSearchItemSearchResults;

  @Metadata()
  statusCode: number;
}

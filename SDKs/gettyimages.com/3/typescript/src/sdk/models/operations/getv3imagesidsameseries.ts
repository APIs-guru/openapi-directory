import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3ImagesIdSameSeriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetV3ImagesIdSameSeriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.ImagesFieldValuesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetV3ImagesIdSameSeriesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3ImagesIdSameSeriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV3ImagesIdSameSeriesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV3ImagesIdSameSeriesQueryParams;

  @SpeakeasyMetadata()
  headers: GetV3ImagesIdSameSeriesHeaders;
}


export class GetV3ImagesIdSameSeriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imageSearchItemSearchResults?: shared.ImageSearchItemSearchResults;

  @SpeakeasyMetadata()
  statusCode: number;
}

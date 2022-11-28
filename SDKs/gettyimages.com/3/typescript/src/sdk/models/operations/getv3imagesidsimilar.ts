import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3ImagesIdSimilarPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetV3ImagesIdSimilarQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.ImagesFieldValuesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetV3ImagesIdSimilarHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3ImagesIdSimilarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV3ImagesIdSimilarPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV3ImagesIdSimilarQueryParams;

  @SpeakeasyMetadata()
  headers: GetV3ImagesIdSimilarHeaders;
}


export class GetV3ImagesIdSimilarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imageSearchItemSearchResults?: shared.ImageSearchItemSearchResults;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3ImagesIdSimilarPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetV3ImagesIdSimilarQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.ImagesFieldValuesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetV3ImagesIdSimilarHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3ImagesIdSimilarRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV3ImagesIdSimilarPathParams;

  @Metadata()
  queryParams: GetV3ImagesIdSimilarQueryParams;

  @Metadata()
  headers: GetV3ImagesIdSimilarHeaders;
}


export class GetV3ImagesIdSimilarResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  imageSearchItemSearchResults?: shared.ImageSearchItemSearchResults;

  @Metadata()
  statusCode: number;
}

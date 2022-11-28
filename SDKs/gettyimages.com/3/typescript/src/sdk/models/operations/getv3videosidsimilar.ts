import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3VideosIdSimilarPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetV3VideosIdSimilarQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.BlendedVideosFieldValuesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetV3VideosIdSimilarHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3VideosIdSimilarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV3VideosIdSimilarPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV3VideosIdSimilarQueryParams;

  @SpeakeasyMetadata()
  headers: GetV3VideosIdSimilarHeaders;
}


export class GetV3VideosIdSimilarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

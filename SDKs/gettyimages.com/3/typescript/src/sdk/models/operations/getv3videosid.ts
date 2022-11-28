import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3VideosIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetV3VideosIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.VideoDetailFieldValuesEnum[];
}


export class GetV3VideosIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3VideosIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV3VideosIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV3VideosIdQueryParams;

  @SpeakeasyMetadata()
  headers: GetV3VideosIdHeaders;
}


export class GetV3VideosIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

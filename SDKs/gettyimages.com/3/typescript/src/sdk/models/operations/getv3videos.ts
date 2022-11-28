import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3VideosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.VideoDetailFieldValuesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ids" })
  ids?: string[];
}


export class GetV3VideosHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3VideosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV3VideosQueryParams;

  @SpeakeasyMetadata()
  headers: GetV3VideosHeaders;
}


export class GetV3VideosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

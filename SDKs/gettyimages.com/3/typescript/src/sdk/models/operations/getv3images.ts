import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3ImagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.ImageDetailFieldValuesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ids" })
  ids?: string[];
}


export class GetV3ImagesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3ImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV3ImagesQueryParams;

  @SpeakeasyMetadata()
  headers: GetV3ImagesHeaders;
}


export class GetV3ImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imagesDetailResults?: shared.ImagesDetailResults;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3ImagesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetV3ImagesIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.ImageDetailFieldValuesEnum[];
}


export class GetV3ImagesIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3ImagesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV3ImagesIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV3ImagesIdQueryParams;

  @SpeakeasyMetadata()
  headers: GetV3ImagesIdHeaders;
}


export class GetV3ImagesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imagesDetailResults?: shared.ImagesDetailResults;

  @SpeakeasyMetadata()
  statusCode: number;
}

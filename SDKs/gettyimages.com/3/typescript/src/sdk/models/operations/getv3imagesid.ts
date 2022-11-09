import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3ImagesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetV3ImagesIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.ImageDetailFieldValuesEnum[];
}


export class GetV3ImagesIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3ImagesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV3ImagesIdPathParams;

  @Metadata()
  queryParams: GetV3ImagesIdQueryParams;

  @Metadata()
  headers: GetV3ImagesIdHeaders;
}


export class GetV3ImagesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  imagesDetailResults?: shared.ImagesDetailResults;

  @Metadata()
  statusCode: number;
}

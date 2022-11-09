import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3ImagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.ImageDetailFieldValuesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=ids" })
  ids?: string[];
}


export class GetV3ImagesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3ImagesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV3ImagesQueryParams;

  @Metadata()
  headers: GetV3ImagesHeaders;
}


export class GetV3ImagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  imagesDetailResults?: shared.ImagesDetailResults;

  @Metadata()
  statusCode: number;
}

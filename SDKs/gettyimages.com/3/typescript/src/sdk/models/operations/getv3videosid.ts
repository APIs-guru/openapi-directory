import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3VideosIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetV3VideosIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.VideoDetailFieldValuesEnum[];
}


export class GetV3VideosIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3VideosIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV3VideosIdPathParams;

  @Metadata()
  queryParams: GetV3VideosIdQueryParams;

  @Metadata()
  headers: GetV3VideosIdHeaders;
}


export class GetV3VideosIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

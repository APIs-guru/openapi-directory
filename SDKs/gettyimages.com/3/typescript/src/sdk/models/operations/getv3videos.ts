import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3VideosQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.VideoDetailFieldValuesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=ids" })
  ids?: string[];
}


export class GetV3VideosHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3VideosRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV3VideosQueryParams;

  @Metadata()
  headers: GetV3VideosHeaders;
}


export class GetV3VideosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

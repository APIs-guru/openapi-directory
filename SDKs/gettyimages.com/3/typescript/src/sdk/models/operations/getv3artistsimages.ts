import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3ArtistsImagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=artist_name" })
  artistName?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.ArtistsImageSearchFieldValuesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetV3ArtistsImagesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3ArtistsImagesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV3ArtistsImagesQueryParams;

  @Metadata()
  headers: GetV3ArtistsImagesHeaders;
}


export class GetV3ArtistsImagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

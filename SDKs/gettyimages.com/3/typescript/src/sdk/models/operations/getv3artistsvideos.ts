import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3ArtistsVideosQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=artist_name" })
  artistName?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.ArtistsVideoSearchFieldValuesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetV3ArtistsVideosHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3ArtistsVideosRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV3ArtistsVideosQueryParams;

  @Metadata()
  headers: GetV3ArtistsVideosHeaders;
}


export class GetV3ArtistsVideosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

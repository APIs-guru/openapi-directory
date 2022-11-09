import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GenreTypeSearchReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=genre_description" })
  genreDescription: string;
}


export class GenreTypeSearchReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GenreTypeSearchReadPathParams;
}


export class GenreTypeSearchReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

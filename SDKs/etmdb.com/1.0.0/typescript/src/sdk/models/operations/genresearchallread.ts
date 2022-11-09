import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GenreSearchallReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=movie_genre_type" })
  movieGenreType: string;
}


export class GenreSearchallReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GenreSearchallReadPathParams;
}


export class GenreSearchallReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

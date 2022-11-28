import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GenreSearchallReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=movie_genre_type" })
  movieGenreType: string;
}


export class GenreSearchallReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GenreSearchallReadPathParams;
}


export class GenreSearchallReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

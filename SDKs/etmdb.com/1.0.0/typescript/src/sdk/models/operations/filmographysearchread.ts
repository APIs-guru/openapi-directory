import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FilmographySearchReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=movie_title" })
  movieTitle: string;
}


export class FilmographySearchReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FilmographySearchReadPathParams;
}


export class FilmographySearchReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FilmographySearchReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=movie_title" })
  movieTitle: string;
}


export class FilmographySearchReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FilmographySearchReadPathParams;
}


export class FilmographySearchReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

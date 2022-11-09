import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MovieSearchReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=movie_title" })
  movieTitle: string;
}


export class MovieSearchReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MovieSearchReadPathParams;
}


export class MovieSearchReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

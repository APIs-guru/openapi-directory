import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MovieCastSearchReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=movie_title" })
  movieTitle: string;
}


export class MovieCastSearchReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MovieCastSearchReadPathParams;
}


export class MovieCastSearchReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

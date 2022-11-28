import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MovieSearchReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=movie_title" })
  movieTitle: string;
}


export class MovieSearchReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MovieSearchReadPathParams;
}


export class MovieSearchReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

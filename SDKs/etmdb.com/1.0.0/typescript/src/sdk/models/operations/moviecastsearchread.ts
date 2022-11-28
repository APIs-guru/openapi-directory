import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MovieCastSearchReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=movie_title" })
  movieTitle: string;
}


export class MovieCastSearchReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MovieCastSearchReadPathParams;
}


export class MovieCastSearchReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

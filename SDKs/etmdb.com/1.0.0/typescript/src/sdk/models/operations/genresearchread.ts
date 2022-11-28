import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GenreSearchReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=movie_title" })
  movieTitle: string;
}


export class GenreSearchReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GenreSearchReadPathParams;
}


export class GenreSearchReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

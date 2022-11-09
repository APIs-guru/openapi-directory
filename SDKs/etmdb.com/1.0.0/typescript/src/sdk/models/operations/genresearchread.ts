import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GenreSearchReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=movie_title" })
  movieTitle: string;
}


export class GenreSearchReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GenreSearchReadPathParams;
}


export class GenreSearchReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

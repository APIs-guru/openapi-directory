import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GenreTypeSearchReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=genre_description" })
  genreDescription: string;
}


export class GenreTypeSearchReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GenreTypeSearchReadPathParams;
}


export class GenreTypeSearchReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

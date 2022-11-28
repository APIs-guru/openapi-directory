import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MediaSearchReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=movie_title" })
  movieTitle: string;
}


export class MediaSearchReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MediaSearchReadPathParams;
}


export class MediaSearchReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WatchlistSearchReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=movie_title" })
  movieTitle: string;
}


export class WatchlistSearchReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WatchlistSearchReadPathParams;
}


export class WatchlistSearchReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

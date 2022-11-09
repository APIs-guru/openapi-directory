import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WatchlistSearchReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=movie_title" })
  movieTitle: string;
}


export class WatchlistSearchReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: WatchlistSearchReadPathParams;
}


export class WatchlistSearchReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

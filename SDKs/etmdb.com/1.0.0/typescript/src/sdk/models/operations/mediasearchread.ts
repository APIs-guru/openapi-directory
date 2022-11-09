import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MediaSearchReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=movie_title" })
  movieTitle: string;
}


export class MediaSearchReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MediaSearchReadPathParams;
}


export class MediaSearchReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

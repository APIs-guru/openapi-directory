import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CinemaScheduleSearchReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=movie_title" })
  movieTitle: string;
}


export class CinemaScheduleSearchReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CinemaScheduleSearchReadPathParams;
}


export class CinemaScheduleSearchReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

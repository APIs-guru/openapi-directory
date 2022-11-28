import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CinemaScheduleSearchReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=movie_title" })
  movieTitle: string;
}


export class CinemaScheduleSearchReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CinemaScheduleSearchReadPathParams;
}


export class CinemaScheduleSearchReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CinemaSheduleShowtimeSearchReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=movie_title" })
  movieTitle: string;
}


export class CinemaSheduleShowtimeSearchReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CinemaSheduleShowtimeSearchReadPathParams;
}


export class CinemaSheduleShowtimeSearchReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

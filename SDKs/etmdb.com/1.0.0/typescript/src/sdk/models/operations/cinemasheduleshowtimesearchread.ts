import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CinemaSheduleShowtimeSearchReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=movie_title" })
  movieTitle: string;
}


export class CinemaSheduleShowtimeSearchReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CinemaSheduleShowtimeSearchReadPathParams;
}


export class CinemaSheduleShowtimeSearchReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

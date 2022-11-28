import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CinemaDetailSearchReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cinema_name" })
  cinemaName: string;
}


export class CinemaDetailSearchReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CinemaDetailSearchReadPathParams;
}


export class CinemaDetailSearchReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

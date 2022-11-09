import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CinemaDetailSearchReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cinema_name" })
  cinemaName: string;
}


export class CinemaDetailSearchReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CinemaDetailSearchReadPathParams;
}


export class CinemaDetailSearchReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

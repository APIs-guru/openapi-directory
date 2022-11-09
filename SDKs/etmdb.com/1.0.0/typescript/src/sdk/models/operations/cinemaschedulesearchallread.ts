import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CinemaScheduleSearchallReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=param" })
  param: string;
}


export class CinemaScheduleSearchallReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CinemaScheduleSearchallReadPathParams;
}


export class CinemaScheduleSearchallReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

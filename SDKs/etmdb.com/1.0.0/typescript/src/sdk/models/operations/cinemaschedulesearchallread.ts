import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CinemaScheduleSearchallReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=param" })
  param: string;
}


export class CinemaScheduleSearchallReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CinemaScheduleSearchallReadPathParams;
}


export class CinemaScheduleSearchallReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

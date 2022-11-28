import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CinemaSheduleShowtimeSearchallReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=param" })
  param: string;
}


export class CinemaSheduleShowtimeSearchallReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CinemaSheduleShowtimeSearchallReadPathParams;
}


export class CinemaSheduleShowtimeSearchallReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

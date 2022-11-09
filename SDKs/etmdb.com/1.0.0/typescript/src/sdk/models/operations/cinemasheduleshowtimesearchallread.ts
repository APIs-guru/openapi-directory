import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CinemaSheduleShowtimeSearchallReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=param" })
  param: string;
}


export class CinemaSheduleShowtimeSearchallReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CinemaSheduleShowtimeSearchallReadPathParams;
}


export class CinemaSheduleShowtimeSearchallReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

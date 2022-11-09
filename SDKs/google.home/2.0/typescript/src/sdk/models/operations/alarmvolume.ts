import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AlarmVolumeRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AlarmVolumeRequest;
}


export class AlarmVolumeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getvolume?: shared.Getvolume;

  @Metadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AlarmVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AlarmVolumeRequest;
}


export class AlarmVolumeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getvolume?: shared.Getvolume;

  @SpeakeasyMetadata()
  statusCode: number;
}

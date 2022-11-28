import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAlarmsandTimersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeleteAlarmsandTimersRequest;
}


export class DeleteAlarmsandTimersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  example19?: shared.Example19;

  @SpeakeasyMetadata()
  statusCode: number;
}

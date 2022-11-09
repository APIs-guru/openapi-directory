import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteAlarmsandTimersRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteAlarmsandTimersRequest;
}


export class DeleteAlarmsandTimersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  example19?: shared.Example19;

  @Metadata()
  statusCode: number;
}

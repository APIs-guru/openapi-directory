import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CheckReadyStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CheckReadyStatusRequest;
}


export class CheckReadyStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  example13?: shared.Example13;

  @Metadata()
  statusCode: number;
}

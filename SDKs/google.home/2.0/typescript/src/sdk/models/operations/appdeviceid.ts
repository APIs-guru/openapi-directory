import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppDeviceIdRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AppDeviceIdRequest;
}


export class AppDeviceIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  example11?: shared.Example11;

  @Metadata()
  statusCode: number;
}

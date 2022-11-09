import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TestInternetDownloadSpeedRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TestInternetDownloadSpeedRequest;
}


export class TestInternetDownloadSpeedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  example16?: shared.Example16;

  @Metadata()
  statusCode: number;
}

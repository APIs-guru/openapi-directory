import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TestInternetDownloadSpeedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.TestInternetDownloadSpeedRequest;
}


export class TestInternetDownloadSpeedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  example16?: shared.Example16;

  @SpeakeasyMetadata()
  statusCode: number;
}

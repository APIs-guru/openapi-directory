import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateActivityOnQueueHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=User-Agent" })
  userAgent: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-applecloudextension-retry-count" })
  xApplecloudextensionRetryCount?: number;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-applecloudextension-session-id" })
  xApplecloudextensionSessionId: string;
}


export class UpdateActivityOnQueueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateActivityOnQueueHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.UpdateActivityRequest;
}


export class UpdateActivityOnQueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateActivityResponse?: shared.UpdateActivityResponse;
}

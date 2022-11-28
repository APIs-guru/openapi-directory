import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PlayMediaOnQueueHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=User-Agent" })
  userAgent: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-applecloudextension-retry-count" })
  xApplecloudextensionRetryCount?: number;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-applecloudextension-session-id" })
  xApplecloudextensionSessionId: string;
}


export class PlayMediaOnQueueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PlayMediaOnQueueHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.PlayMediaRequest;
}


export class PlayMediaOnQueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  queue?: shared.Queue;

  @SpeakeasyMetadata()
  statusCode: number;
}

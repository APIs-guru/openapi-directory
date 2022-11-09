import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PlayMediaOnQueueHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;

  @Metadata({ data: "header, style=simple;explode=false;name=User-Agent" })
  userAgent: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-applecloudextension-retry-count" })
  xApplecloudextensionRetryCount?: number;

  @Metadata({ data: "header, style=simple;explode=false;name=x-applecloudextension-session-id" })
  xApplecloudextensionSessionId: string;
}


export class PlayMediaOnQueueRequest extends SpeakeasyBase {
  @Metadata()
  headers: PlayMediaOnQueueHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.PlayMediaRequest;
}


export class PlayMediaOnQueueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  queue?: shared.Queue;

  @Metadata()
  statusCode: number;
}

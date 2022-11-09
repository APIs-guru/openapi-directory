import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateActivityOnQueueHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;

  @Metadata({ data: "header, style=simple;explode=false;name=User-Agent" })
  userAgent: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-applecloudextension-retry-count" })
  xApplecloudextensionRetryCount?: number;

  @Metadata({ data: "header, style=simple;explode=false;name=x-applecloudextension-session-id" })
  xApplecloudextensionSessionId: string;
}


export class UpdateActivityOnQueueRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateActivityOnQueueHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.UpdateActivityRequest;
}


export class UpdateActivityOnQueueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateActivityResponse?: shared.UpdateActivityResponse;
}

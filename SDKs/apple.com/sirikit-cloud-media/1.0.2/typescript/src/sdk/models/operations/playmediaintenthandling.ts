import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PlayMediaIntentHandlingHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Request-Timeout" })
  requestTimeout: number;

  @Metadata({ data: "header, style=simple;explode=false;name=User-Agent" })
  userAgent: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-applecloudextension-retry-count" })
  xApplecloudextensionRetryCount?: number;

  @Metadata({ data: "header, style=simple;explode=false;name=x-applecloudextension-session-id" })
  xApplecloudextensionSessionId: string;
}


export class PlayMediaIntentHandlingRequest extends SpeakeasyBase {
  @Metadata()
  headers: PlayMediaIntentHandlingHeaders;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.PlayMediaIntentHandlingInvocation })
  request?: shared.PlayMediaIntentHandlingInvocation[];
}


export class PlayMediaIntentHandlingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  playMediaIntentHandlingInvocationResponses?: any[];

  @Metadata()
  statusCode: number;
}

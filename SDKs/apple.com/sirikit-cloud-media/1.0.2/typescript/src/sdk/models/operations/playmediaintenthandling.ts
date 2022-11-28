import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PlayMediaIntentHandlingHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Request-Timeout" })
  requestTimeout: number;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=User-Agent" })
  userAgent: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-applecloudextension-retry-count" })
  xApplecloudextensionRetryCount?: number;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-applecloudextension-session-id" })
  xApplecloudextensionSessionId: string;
}


export class PlayMediaIntentHandlingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PlayMediaIntentHandlingHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.PlayMediaIntentHandlingInvocation })
  request?: shared.PlayMediaIntentHandlingInvocation[];
}


export class PlayMediaIntentHandlingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  playMediaIntentHandlingInvocationResponses?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}

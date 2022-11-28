import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateMediaAffinityIntentHandlingHeaders extends SpeakeasyBase {
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


export class UpdateMediaAffinityIntentHandlingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateMediaAffinityIntentHandlingHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.UpdateMediaAffinityIntentHandlingInvocation })
  request?: shared.UpdateMediaAffinityIntentHandlingInvocation[];
}


export class UpdateMediaAffinityIntentHandlingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateMediaAffinityIntentHandlingInvocationResponses?: any[];
}

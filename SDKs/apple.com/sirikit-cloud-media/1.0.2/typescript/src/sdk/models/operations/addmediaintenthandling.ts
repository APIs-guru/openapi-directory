import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddMediaIntentHandlingHeaders extends SpeakeasyBase {
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


export class AddMediaIntentHandlingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AddMediaIntentHandlingHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.AddMediaIntentHandlingInvocation })
  request?: shared.AddMediaIntentHandlingInvocation[];
}


export class AddMediaIntentHandlingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addMediaIntentHandlingInvocationResponses?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}

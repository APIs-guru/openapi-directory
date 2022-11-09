import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddMediaIntentHandlingHeaders extends SpeakeasyBase {
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


export class AddMediaIntentHandlingRequest extends SpeakeasyBase {
  @Metadata()
  headers: AddMediaIntentHandlingHeaders;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.AddMediaIntentHandlingInvocation })
  request?: shared.AddMediaIntentHandlingInvocation[];
}


export class AddMediaIntentHandlingResponse extends SpeakeasyBase {
  @Metadata()
  addMediaIntentHandlingInvocationResponses?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}

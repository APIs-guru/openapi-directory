import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExtensionConfigurationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Cache-Control" })
  cacheControl: string;

  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Request-Timeout" })
  requestTimeout: number;

  @Metadata({ data: "header, style=simple;explode=false;name=User-Agent" })
  userAgent: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-applecloudextension-retry-count" })
  xApplecloudextensionRetryCount?: number;

  @Metadata({ data: "header, style=simple;explode=false;name=x-applecloudextension-session-id" })
  xApplecloudextensionSessionId: string;
}


export class ExtensionConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: ExtensionConfigurationHeaders;
}


export class ExtensionConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}

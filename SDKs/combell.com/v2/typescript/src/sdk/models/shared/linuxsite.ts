import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HostHeader } from "./hostheader";


export class LinuxSite extends SpeakeasyBase {
  @Metadata({ data: "json, name=host_headers", elemType: shared.HostHeader })
  hostHeaders?: HostHeader[];

  @Metadata({ data: "json, name=http2_enabled" })
  http2Enabled?: boolean;

  @Metadata({ data: "json, name=https_redirect_enabled" })
  httpsRedirectEnabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=ssl_enabled" })
  sslEnabled?: boolean;
}

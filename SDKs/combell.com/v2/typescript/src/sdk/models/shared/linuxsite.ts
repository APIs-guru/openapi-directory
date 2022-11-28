import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HostHeader } from "./hostheader";



export class LinuxSite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host_headers", elemType: HostHeader })
  hostHeaders?: HostHeader[];

  @SpeakeasyMetadata({ data: "json, name=http2_enabled" })
  http2Enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=https_redirect_enabled" })
  httpsRedirectEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=ssl_enabled" })
  sslEnabled?: boolean;
}

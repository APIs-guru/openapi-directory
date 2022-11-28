import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProxyInfo
/** 
 * Configuration info for an HTTP proxy. For a direct proxy, set the host, port, and excluded_hosts fields. For a PAC script proxy, set the pac_uri field.
**/
export class ProxyInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludedHosts" })
  excludedHosts?: string[];

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=pacUri" })
  pacUri?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;
}

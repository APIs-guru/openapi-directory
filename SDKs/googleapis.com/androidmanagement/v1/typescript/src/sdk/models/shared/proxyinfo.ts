import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProxyInfo
/** 
 * Configuration info for an HTTP proxy. For a direct proxy, set the host, port, and excluded_hosts fields. For a PAC script proxy, set the pac_uri field.
**/
export class ProxyInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludedHosts" })
  excludedHosts?: string[];

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=pacUri" })
  pacUri?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;
}

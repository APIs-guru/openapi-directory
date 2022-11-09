import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SiteBinding
/** 
 * A site binding identifies a web domain.
**/
export class SiteBinding extends SpeakeasyBase {
  @Metadata({ data: "json, name=cert_thumbprint" })
  certThumbprint?: string;

  @Metadata({ data: "json, name=host_name" })
  hostName?: string;

  @Metadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=ssl_enabled" })
  sslEnabled?: boolean;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SiteBinding
/** 
 * A site binding identifies a web domain.
**/
export class SiteBinding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cert_thumbprint" })
  certThumbprint?: string;

  @SpeakeasyMetadata({ data: "json, name=host_name" })
  hostName?: string;

  @SpeakeasyMetadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=ssl_enabled" })
  sslEnabled?: boolean;
}

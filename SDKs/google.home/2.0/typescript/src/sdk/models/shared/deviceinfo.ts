import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Capabilities } from "./capabilities";


export class DeviceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=4k_blocked" })
  fourkBlocked: number;

  @Metadata({ data: "json, name=capabilities" })
  capabilities: Capabilities;

  @Metadata({ data: "json, name=cloud_device_id" })
  cloudDeviceId: string;

  @Metadata({ data: "json, name=factory_country_code" })
  factoryCountryCode: string;

  @Metadata({ data: "json, name=hotspot_bssid" })
  hotspotBssid: string;

  @Metadata({ data: "json, name=local_authorization_token_hash" })
  localAuthorizationTokenHash: string;

  @Metadata({ data: "json, name=mac_address" })
  macAddress: string;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer: string;

  @Metadata({ data: "json, name=model_name" })
  modelName: string;

  @Metadata({ data: "json, name=product_name" })
  productName: string;

  @Metadata({ data: "json, name=public_key" })
  publicKey: string;

  @Metadata({ data: "json, name=ssdp_udn" })
  ssdpUdn: string;

  @Metadata({ data: "json, name=uma_client_id" })
  umaClientId: string;

  @Metadata({ data: "json, name=uptime" })
  uptime: number;

  @Metadata({ data: "json, name=weave_device_id" })
  weaveDeviceId: string;
}

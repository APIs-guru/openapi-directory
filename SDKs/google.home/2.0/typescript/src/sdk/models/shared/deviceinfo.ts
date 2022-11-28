import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Capabilities } from "./capabilities";



export class DeviceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=4k_blocked" })
  fourkBlocked: number;

  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities: Capabilities;

  @SpeakeasyMetadata({ data: "json, name=cloud_device_id" })
  cloudDeviceId: string;

  @SpeakeasyMetadata({ data: "json, name=factory_country_code" })
  factoryCountryCode: string;

  @SpeakeasyMetadata({ data: "json, name=hotspot_bssid" })
  hotspotBssid: string;

  @SpeakeasyMetadata({ data: "json, name=local_authorization_token_hash" })
  localAuthorizationTokenHash: string;

  @SpeakeasyMetadata({ data: "json, name=mac_address" })
  macAddress: string;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer: string;

  @SpeakeasyMetadata({ data: "json, name=model_name" })
  modelName: string;

  @SpeakeasyMetadata({ data: "json, name=product_name" })
  productName: string;

  @SpeakeasyMetadata({ data: "json, name=public_key" })
  publicKey: string;

  @SpeakeasyMetadata({ data: "json, name=ssdp_udn" })
  ssdpUdn: string;

  @SpeakeasyMetadata({ data: "json, name=uma_client_id" })
  umaClientId: string;

  @SpeakeasyMetadata({ data: "json, name=uptime" })
  uptime: number;

  @SpeakeasyMetadata({ data: "json, name=weave_device_id" })
  weaveDeviceId: string;
}

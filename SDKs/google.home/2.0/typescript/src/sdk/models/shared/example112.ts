import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Example112 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device_class" })
  deviceClass: number;

  @SpeakeasyMetadata({ data: "json, name=device_type" })
  deviceType: number;

  @SpeakeasyMetadata({ data: "json, name=expected_profiles" })
  expectedProfiles: number;

  @SpeakeasyMetadata({ data: "json, name=mac_address" })
  macAddress: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=rssi" })
  rssi: number;
}

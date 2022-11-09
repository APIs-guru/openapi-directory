import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Example112 extends SpeakeasyBase {
  @Metadata({ data: "json, name=device_class" })
  deviceClass: number;

  @Metadata({ data: "json, name=device_type" })
  deviceType: number;

  @Metadata({ data: "json, name=expected_profiles" })
  expectedProfiles: number;

  @Metadata({ data: "json, name=mac_address" })
  macAddress: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=rssi" })
  rssi: number;
}

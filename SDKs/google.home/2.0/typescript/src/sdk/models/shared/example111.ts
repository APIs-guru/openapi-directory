import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Example111 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bond_date" })
  bondDate: number;

  @SpeakeasyMetadata({ data: "json, name=device_class" })
  deviceClass: number;

  @SpeakeasyMetadata({ data: "json, name=device_type" })
  deviceType: number;

  @SpeakeasyMetadata({ data: "json, name=last_connect_date" })
  lastConnectDate: number;

  @SpeakeasyMetadata({ data: "json, name=mac_address" })
  macAddress: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=rssi" })
  rssi: number;

  @SpeakeasyMetadata({ data: "json, name=service_uuids" })
  serviceUuids: string[];
}

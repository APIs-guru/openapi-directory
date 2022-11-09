import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Example111 extends SpeakeasyBase {
  @Metadata({ data: "json, name=bond_date" })
  bondDate: number;

  @Metadata({ data: "json, name=device_class" })
  deviceClass: number;

  @Metadata({ data: "json, name=device_type" })
  deviceType: number;

  @Metadata({ data: "json, name=last_connect_date" })
  lastConnectDate: number;

  @Metadata({ data: "json, name=mac_address" })
  macAddress: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=rssi" })
  rssi: number;

  @Metadata({ data: "json, name=service_uuids" })
  serviceUuids: string[];
}

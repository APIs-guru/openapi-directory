import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Net extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ethernet_connected" })
  ethernetConnected: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip_address" })
  ipAddress: string;

  @SpeakeasyMetadata({ data: "json, name=online" })
  online: boolean;
}

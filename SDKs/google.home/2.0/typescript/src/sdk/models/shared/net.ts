import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Net extends SpeakeasyBase {
  @Metadata({ data: "json, name=ethernet_connected" })
  ethernetConnected: boolean;

  @Metadata({ data: "json, name=ip_address" })
  ipAddress: string;

  @Metadata({ data: "json, name=online" })
  online: boolean;
}

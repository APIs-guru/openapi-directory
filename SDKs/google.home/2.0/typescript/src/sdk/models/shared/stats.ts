import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Stats extends SpeakeasyBase {
  @Metadata({ data: "json, name=num_check_connectivity" })
  numCheckConnectivity: number;

  @Metadata({ data: "json, name=num_connect_wifi" })
  numConnectWifi: number;

  @Metadata({ data: "json, name=num_connected_wifi_not_saved" })
  numConnectedWifiNotSaved: number;

  @Metadata({ data: "json, name=num_initial_eureka_info" })
  numInitialEurekaInfo: number;

  @Metadata({ data: "json, name=num_obtain_ip" })
  numObtainIp: number;
}

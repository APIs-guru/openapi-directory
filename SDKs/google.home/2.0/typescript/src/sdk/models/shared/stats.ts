import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Stats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=num_check_connectivity" })
  numCheckConnectivity: number;

  @SpeakeasyMetadata({ data: "json, name=num_connect_wifi" })
  numConnectWifi: number;

  @SpeakeasyMetadata({ data: "json, name=num_connected_wifi_not_saved" })
  numConnectedWifiNotSaved: number;

  @SpeakeasyMetadata({ data: "json, name=num_initial_eureka_info" })
  numInitialEurekaInfo: number;

  @SpeakeasyMetadata({ data: "json, name=num_obtain_ip" })
  numObtainIp: number;
}

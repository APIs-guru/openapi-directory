import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NetworkInstanceIpModeEnum {
    InstanceIpModeUnspecified = "INSTANCE_IP_MODE_UNSPECIFIED",
    External = "EXTERNAL",
    Internal = "INTERNAL"
}


// Network
/** 
 * Extra network settings. Only applicable in the App Engine flexible environment.
**/
export class Network extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=forwardedPorts" })
  forwardedPorts?: string[];

  @SpeakeasyMetadata({ data: "json, name=instanceIpMode" })
  instanceIpMode?: NetworkInstanceIpModeEnum;

  @SpeakeasyMetadata({ data: "json, name=instanceTag" })
  instanceTag?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionAffinity" })
  sessionAffinity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=subnetworkName" })
  subnetworkName?: string;
}

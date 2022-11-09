import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NetworkInstanceIpModeEnum {
    InstanceIpModeUnspecified = "INSTANCE_IP_MODE_UNSPECIFIED"
,    External = "EXTERNAL"
,    Internal = "INTERNAL"
}


// Network
/** 
 * Extra network settings. Only applicable in the App Engine flexible environment.
**/
export class Network extends SpeakeasyBase {
  @Metadata({ data: "json, name=forwardedPorts" })
  forwardedPorts?: string[];

  @Metadata({ data: "json, name=instanceIpMode" })
  instanceIpMode?: NetworkInstanceIpModeEnum;

  @Metadata({ data: "json, name=instanceTag" })
  instanceTag?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sessionAffinity" })
  sessionAffinity?: boolean;

  @Metadata({ data: "json, name=subnetworkName" })
  subnetworkName?: string;
}

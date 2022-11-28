import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SyslogConfigProtocolEnum {
    Tcp = "TCP",
    Udp = "UDP"
}


// SyslogConfig
/** 
 * Syslog settings
**/
export class SyslogConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=logIpEnabled" })
  logIpEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: SyslogConfigProtocolEnum;
}

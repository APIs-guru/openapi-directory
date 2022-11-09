import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SyslogConfigProtocolEnum {
    Tcp = "TCP"
,    Udp = "UDP"
}


// SyslogConfig
/** 
 * Syslog settings
**/
export class SyslogConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=logIpEnabled" })
  logIpEnabled?: boolean;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=protocol" })
  protocol?: SyslogConfigProtocolEnum;
}

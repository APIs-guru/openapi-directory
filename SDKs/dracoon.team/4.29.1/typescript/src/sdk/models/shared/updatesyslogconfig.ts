import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UpdateSyslogConfigProtocolEnum {
    Tcp = "TCP"
,    Udp = "UDP"
}


// UpdateSyslogConfig
/** 
 * Request model for updating syslog settings
**/
export class UpdateSyslogConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=logIpEnabled" })
  logIpEnabled?: boolean;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=protocol" })
  protocol?: UpdateSyslogConfigProtocolEnum;
}

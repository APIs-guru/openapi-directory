import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UpdateSyslogConfigProtocolEnum {
    Tcp = "TCP",
    Udp = "UDP"
}


// UpdateSyslogConfig
/** 
 * Request model for updating syslog settings
**/
export class UpdateSyslogConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=logIpEnabled" })
  logIpEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: UpdateSyslogConfigProtocolEnum;
}

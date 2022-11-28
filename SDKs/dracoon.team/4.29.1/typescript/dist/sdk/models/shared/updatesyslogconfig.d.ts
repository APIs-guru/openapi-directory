import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UpdateSyslogConfigProtocolEnum {
    Tcp = "TCP",
    Udp = "UDP"
}
/**
 * Request model for updating syslog settings
**/
export declare class UpdateSyslogConfig extends SpeakeasyBase {
    enabled?: boolean;
    host?: string;
    logIpEnabled?: boolean;
    port?: number;
    protocol?: UpdateSyslogConfigProtocolEnum;
}

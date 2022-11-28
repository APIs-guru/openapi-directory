import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SyslogConfigProtocolEnum {
    Tcp = "TCP",
    Udp = "UDP"
}
/**
 * Syslog settings
**/
export declare class SyslogConfig extends SpeakeasyBase {
    enabled?: boolean;
    host?: string;
    logIpEnabled?: boolean;
    port?: number;
    protocol?: SyslogConfigProtocolEnum;
}

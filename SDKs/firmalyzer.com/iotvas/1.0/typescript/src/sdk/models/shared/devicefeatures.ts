import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeviceFeatures extends SpeakeasyBase {
  @Metadata({ data: "json, name=ftp_banner" })
  ftpBanner?: string;

  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=http_response" })
  httpResponse?: string;

  @Metadata({ data: "json, name=https_response" })
  httpsResponse?: string;

  @Metadata({ data: "json, name=nic_mac" })
  nicMac?: string;

  @Metadata({ data: "json, name=snmp_sysdescr" })
  snmpSysdescr?: string;

  @Metadata({ data: "json, name=snmp_sysoid" })
  snmpSysoid?: string;

  @Metadata({ data: "json, name=telnet_banner" })
  telnetBanner?: string;

  @Metadata({ data: "json, name=upnp_response" })
  upnpResponse?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeviceFeatures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ftp_banner" })
  ftpBanner?: string;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=http_response" })
  httpResponse?: string;

  @SpeakeasyMetadata({ data: "json, name=https_response" })
  httpsResponse?: string;

  @SpeakeasyMetadata({ data: "json, name=nic_mac" })
  nicMac?: string;

  @SpeakeasyMetadata({ data: "json, name=snmp_sysdescr" })
  snmpSysdescr?: string;

  @SpeakeasyMetadata({ data: "json, name=snmp_sysoid" })
  snmpSysoid?: string;

  @SpeakeasyMetadata({ data: "json, name=telnet_banner" })
  telnetBanner?: string;

  @SpeakeasyMetadata({ data: "json, name=upnp_response" })
  upnpResponse?: string;
}

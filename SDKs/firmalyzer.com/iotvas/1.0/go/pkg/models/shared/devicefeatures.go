package shared

type DeviceFeatures struct {
	FtpBanner     *string `json:"ftp_banner"`
	Hostname      *string `json:"hostname"`
	HTTPResponse  *string `json:"http_response"`
	HTTPSResponse *string `json:"https_response"`
	NicMac        *string `json:"nic_mac"`
	SnmpSysdescr  *string `json:"snmp_sysdescr"`
	SnmpSysoid    *string `json:"snmp_sysoid"`
	TelnetBanner  *string `json:"telnet_banner"`
	UpnpResponse  *string `json:"upnp_response"`
}

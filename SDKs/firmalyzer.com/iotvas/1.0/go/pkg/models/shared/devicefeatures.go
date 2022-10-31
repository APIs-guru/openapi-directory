package shared



type DeviceFeatures struct {
    FtpBanner *string `json:"ftp_banner,omitempty"`
    Hostname *string `json:"hostname,omitempty"`
    HTTPResponse *string `json:"http_response,omitempty"`
    HTTPSResponse *string `json:"https_response,omitempty"`
    NicMac *string `json:"nic_mac,omitempty"`
    SnmpSysdescr *string `json:"snmp_sysdescr,omitempty"`
    SnmpSysoid *string `json:"snmp_sysoid,omitempty"`
    TelnetBanner *string `json:"telnet_banner,omitempty"`
    UpnpResponse *string `json:"upnp_response,omitempty"`
    
}


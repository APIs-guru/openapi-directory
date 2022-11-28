from dataclasses import dataclass, field
from enum import Enum

class StatefulRuleProtocolEnum(str, Enum):
    IP = "IP"
    TCP = "TCP"
    UDP = "UDP"
    ICMP = "ICMP"
    HTTP = "HTTP"
    FTP = "FTP"
    TLS = "TLS"
    SMB = "SMB"
    DNS = "DNS"
    DCERPC = "DCERPC"
    SSH = "SSH"
    SMTP = "SMTP"
    IMAP = "IMAP"
    MSN = "MSN"
    KRB5 = "KRB5"
    IKEV2 = "IKEV2"
    TFTP = "TFTP"
    NTP = "NTP"
    DHCP = "DHCP"


package shared

import (
"time")

type InstanceAccessDetails struct {
    CertKey *string `json:"certKey,omitempty"`
    ExpiresAt *time.Time `json:"expiresAt,omitempty"`
    HostKeys []HostKeyAttributes `json:"hostKeys,omitempty"`
    InstanceName *string `json:"instanceName,omitempty"`
    IPAddress *string `json:"ipAddress,omitempty"`
    Password *string `json:"password,omitempty"`
    PasswordData *PasswordData `json:"passwordData,omitempty"`
    PrivateKey *string `json:"privateKey,omitempty"`
    Protocol *InstanceAccessProtocolEnum `json:"protocol,omitempty"`
    Username *string `json:"username,omitempty"`
    
}


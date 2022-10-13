package shared

import (
	"time"
)

type InstanceAccessDetails struct {
	CertKey      *string                     `json:"certKey"`
	ExpiresAt    *time.Time                  `json:"expiresAt"`
	HostKeys     []HostKeyAttributes         `json:"hostKeys"`
	InstanceName *string                     `json:"instanceName"`
	IPAddress    *string                     `json:"ipAddress"`
	Password     *string                     `json:"password"`
	PasswordData *PasswordData               `json:"passwordData"`
	PrivateKey   *string                     `json:"privateKey"`
	Protocol     *InstanceAccessProtocolEnum `json:"protocol"`
	Username     *string                     `json:"username"`
}

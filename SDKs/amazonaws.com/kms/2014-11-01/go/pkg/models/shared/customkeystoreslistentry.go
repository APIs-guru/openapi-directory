package shared

import (
	"time"
)

type CustomKeyStoresListEntry struct {
	CloudHsmClusterID      *string                      `json:"CloudHsmClusterId"`
	ConnectionErrorCode    *ConnectionErrorCodeTypeEnum `json:"ConnectionErrorCode"`
	ConnectionState        *ConnectionStateTypeEnum     `json:"ConnectionState"`
	CreationDate           *time.Time                   `json:"CreationDate"`
	CustomKeyStoreID       *string                      `json:"CustomKeyStoreId"`
	CustomKeyStoreName     *string                      `json:"CustomKeyStoreName"`
	TrustAnchorCertificate *string                      `json:"TrustAnchorCertificate"`
}

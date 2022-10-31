package shared

import (
"time")

type CustomKeyStoresListEntry struct {
    CloudHsmClusterID *string `json:"CloudHsmClusterId,omitempty"`
    ConnectionErrorCode *ConnectionErrorCodeTypeEnum `json:"ConnectionErrorCode,omitempty"`
    ConnectionState *ConnectionStateTypeEnum `json:"ConnectionState,omitempty"`
    CreationDate *time.Time `json:"CreationDate,omitempty"`
    CustomKeyStoreID *string `json:"CustomKeyStoreId,omitempty"`
    CustomKeyStoreName *string `json:"CustomKeyStoreName,omitempty"`
    TrustAnchorCertificate *string `json:"TrustAnchorCertificate,omitempty"`
    
}


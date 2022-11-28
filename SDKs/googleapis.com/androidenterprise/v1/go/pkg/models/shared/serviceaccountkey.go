package shared

type ServiceAccountKeyTypeEnum string

const (
	ServiceAccountKeyTypeEnumGoogleCredentials ServiceAccountKeyTypeEnum = "googleCredentials"
	ServiceAccountKeyTypeEnumPkcs12            ServiceAccountKeyTypeEnum = "pkcs12"
)

// ServiceAccountKey
// Credentials that can be used to authenticate as a service account.
type ServiceAccountKey struct {
	Data       *string                    `json:"data,omitempty"`
	ID         *string                    `json:"id,omitempty"`
	PublicData *string                    `json:"publicData,omitempty"`
	Type       *ServiceAccountKeyTypeEnum `json:"type,omitempty"`
}

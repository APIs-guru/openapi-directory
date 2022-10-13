package shared

type ServiceAccountKeyTypeEnum string

const (
	ServiceAccountKeyTypeEnumGoogleCredentials ServiceAccountKeyTypeEnum = "googleCredentials"
	ServiceAccountKeyTypeEnumPkcs12            ServiceAccountKeyTypeEnum = "pkcs12"
)

type ServiceAccountKey struct {
	Data       *string                    `json:"data"`
	ID         *string                    `json:"id"`
	PublicData *string                    `json:"publicData"`
	Type       *ServiceAccountKeyTypeEnum `json:"type"`
}

package shared




type GoogleCloudApigeeV1AliasTypeEnum string

const (
    GoogleCloudApigeeV1AliasTypeEnumAliasTypeUnspecified GoogleCloudApigeeV1AliasTypeEnum = "ALIAS_TYPE_UNSPECIFIED"
GoogleCloudApigeeV1AliasTypeEnumCert GoogleCloudApigeeV1AliasTypeEnum = "CERT"
GoogleCloudApigeeV1AliasTypeEnumKeyCert GoogleCloudApigeeV1AliasTypeEnum = "KEY_CERT"
)


type GoogleCloudApigeeV1Alias struct {
    Alias *string `json:"alias,omitempty"`
    CertsInfo *GoogleCloudApigeeV1Certificate `json:"certsInfo,omitempty"`
    Type *GoogleCloudApigeeV1AliasTypeEnum `json:"type,omitempty"`
    
}


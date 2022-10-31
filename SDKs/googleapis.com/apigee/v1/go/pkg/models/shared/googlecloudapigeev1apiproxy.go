package shared




type GoogleCloudApigeeV1APIProxyAPIProxyTypeEnum string

const (
    GoogleCloudApigeeV1APIProxyAPIProxyTypeEnumAPIProxyTypeUnspecified GoogleCloudApigeeV1APIProxyAPIProxyTypeEnum = "API_PROXY_TYPE_UNSPECIFIED"
GoogleCloudApigeeV1APIProxyAPIProxyTypeEnumProgrammable GoogleCloudApigeeV1APIProxyAPIProxyTypeEnum = "PROGRAMMABLE"
GoogleCloudApigeeV1APIProxyAPIProxyTypeEnumConfigurable GoogleCloudApigeeV1APIProxyAPIProxyTypeEnum = "CONFIGURABLE"
)


type GoogleCloudApigeeV1APIProxy struct {
    APIProxyType *GoogleCloudApigeeV1APIProxyAPIProxyTypeEnum `json:"apiProxyType,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    LatestRevisionID *string `json:"latestRevisionId,omitempty"`
    MetaData *GoogleCloudApigeeV1EntityMetadata `json:"metaData,omitempty"`
    Name *string `json:"name,omitempty"`
    ReadOnly *bool `json:"readOnly,omitempty"`
    Revision []string `json:"revision,omitempty"`
    
}


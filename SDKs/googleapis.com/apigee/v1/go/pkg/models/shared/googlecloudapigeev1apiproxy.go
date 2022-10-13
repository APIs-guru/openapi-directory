package shared

type GoogleCloudApigeeV1APIProxyAPIProxyTypeEnum string

const (
	GoogleCloudApigeeV1APIProxyAPIProxyTypeEnumAPIProxyTypeUnspecified GoogleCloudApigeeV1APIProxyAPIProxyTypeEnum = "API_PROXY_TYPE_UNSPECIFIED"
	GoogleCloudApigeeV1APIProxyAPIProxyTypeEnumProgrammable            GoogleCloudApigeeV1APIProxyAPIProxyTypeEnum = "PROGRAMMABLE"
	GoogleCloudApigeeV1APIProxyAPIProxyTypeEnumConfigurable            GoogleCloudApigeeV1APIProxyAPIProxyTypeEnum = "CONFIGURABLE"
)

type GoogleCloudApigeeV1APIProxy struct {
	APIProxyType     *GoogleCloudApigeeV1APIProxyAPIProxyTypeEnum `json:"apiProxyType"`
	Labels           map[string]string                            `json:"labels"`
	LatestRevisionID *string                                      `json:"latestRevisionId"`
	MetaData         *GoogleCloudApigeeV1EntityMetadata           `json:"metaData"`
	Name             *string                                      `json:"name"`
	ReadOnly         *bool                                        `json:"readOnly"`
	Revision         []string                                     `json:"revision"`
}

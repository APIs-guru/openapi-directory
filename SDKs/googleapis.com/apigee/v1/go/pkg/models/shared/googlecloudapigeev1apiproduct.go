package shared

type GoogleCloudApigeeV1APIProductQuotaCounterScopeEnum string

const (
	GoogleCloudApigeeV1APIProductQuotaCounterScopeEnumQuotaCounterScopeUnspecified GoogleCloudApigeeV1APIProductQuotaCounterScopeEnum = "QUOTA_COUNTER_SCOPE_UNSPECIFIED"
	GoogleCloudApigeeV1APIProductQuotaCounterScopeEnumProxy                        GoogleCloudApigeeV1APIProductQuotaCounterScopeEnum = "PROXY"
	GoogleCloudApigeeV1APIProductQuotaCounterScopeEnumOperation                    GoogleCloudApigeeV1APIProductQuotaCounterScopeEnum = "OPERATION"
)

type GoogleCloudApigeeV1APIProduct struct {
	APIResources          []string                                            `json:"apiResources"`
	ApprovalType          *string                                             `json:"approvalType"`
	Attributes            []GoogleCloudApigeeV1Attribute                      `json:"attributes"`
	CreatedAt             *string                                             `json:"createdAt"`
	Description           *string                                             `json:"description"`
	DisplayName           *string                                             `json:"displayName"`
	Environments          []string                                            `json:"environments"`
	GraphqlOperationGroup *GoogleCloudApigeeV1GraphQlOperationGroup           `json:"graphqlOperationGroup"`
	LastModifiedAt        *string                                             `json:"lastModifiedAt"`
	Name                  *string                                             `json:"name"`
	OperationGroup        *GoogleCloudApigeeV1OperationGroup                  `json:"operationGroup"`
	Proxies               []string                                            `json:"proxies"`
	Quota                 *string                                             `json:"quota"`
	QuotaCounterScope     *GoogleCloudApigeeV1APIProductQuotaCounterScopeEnum `json:"quotaCounterScope"`
	QuotaInterval         *string                                             `json:"quotaInterval"`
	QuotaTimeUnit         *string                                             `json:"quotaTimeUnit"`
	Scopes                []string                                            `json:"scopes"`
}

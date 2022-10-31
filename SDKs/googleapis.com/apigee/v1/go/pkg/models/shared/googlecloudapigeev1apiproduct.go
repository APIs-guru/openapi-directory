package shared




type GoogleCloudApigeeV1APIProductQuotaCounterScopeEnum string

const (
    GoogleCloudApigeeV1APIProductQuotaCounterScopeEnumQuotaCounterScopeUnspecified GoogleCloudApigeeV1APIProductQuotaCounterScopeEnum = "QUOTA_COUNTER_SCOPE_UNSPECIFIED"
GoogleCloudApigeeV1APIProductQuotaCounterScopeEnumProxy GoogleCloudApigeeV1APIProductQuotaCounterScopeEnum = "PROXY"
GoogleCloudApigeeV1APIProductQuotaCounterScopeEnumOperation GoogleCloudApigeeV1APIProductQuotaCounterScopeEnum = "OPERATION"
)


type GoogleCloudApigeeV1APIProduct struct {
    APIResources []string `json:"apiResources,omitempty"`
    ApprovalType *string `json:"approvalType,omitempty"`
    Attributes []GoogleCloudApigeeV1Attribute `json:"attributes,omitempty"`
    CreatedAt *string `json:"createdAt,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Environments []string `json:"environments,omitempty"`
    GraphqlOperationGroup *GoogleCloudApigeeV1GraphQlOperationGroup `json:"graphqlOperationGroup,omitempty"`
    LastModifiedAt *string `json:"lastModifiedAt,omitempty"`
    Name *string `json:"name,omitempty"`
    OperationGroup *GoogleCloudApigeeV1OperationGroup `json:"operationGroup,omitempty"`
    Proxies []string `json:"proxies,omitempty"`
    Quota *string `json:"quota,omitempty"`
    QuotaCounterScope *GoogleCloudApigeeV1APIProductQuotaCounterScopeEnum `json:"quotaCounterScope,omitempty"`
    QuotaInterval *string `json:"quotaInterval,omitempty"`
    QuotaTimeUnit *string `json:"quotaTimeUnit,omitempty"`
    Scopes []string `json:"scopes,omitempty"`
    
}


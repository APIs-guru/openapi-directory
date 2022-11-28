package shared

type PartnerIntegrationStatusEnum string

const (
	PartnerIntegrationStatusEnumActive            PartnerIntegrationStatusEnum = "Active"
	PartnerIntegrationStatusEnumInactive          PartnerIntegrationStatusEnum = "Inactive"
	PartnerIntegrationStatusEnumRuntimeFailure    PartnerIntegrationStatusEnum = "RuntimeFailure"
	PartnerIntegrationStatusEnumConnectionFailure PartnerIntegrationStatusEnum = "ConnectionFailure"
)

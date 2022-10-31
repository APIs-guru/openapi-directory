package shared

type EndpointTypeEnum string

const (
	EndpointTypeEnumPublic      EndpointTypeEnum = "PUBLIC"
	EndpointTypeEnumVpc         EndpointTypeEnum = "VPC"
	EndpointTypeEnumVpcEndpoint EndpointTypeEnum = "VPC_ENDPOINT"
)

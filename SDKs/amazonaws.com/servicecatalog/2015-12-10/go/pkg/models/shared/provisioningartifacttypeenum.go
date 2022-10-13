package shared

type ProvisioningArtifactTypeEnum string

const (
	ProvisioningArtifactTypeEnumCloudFormationTemplate ProvisioningArtifactTypeEnum = "CLOUD_FORMATION_TEMPLATE"
	ProvisioningArtifactTypeEnumMarketplaceAmi         ProvisioningArtifactTypeEnum = "MARKETPLACE_AMI"
	ProvisioningArtifactTypeEnumMarketplaceCar         ProvisioningArtifactTypeEnum = "MARKETPLACE_CAR"
)

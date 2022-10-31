package shared

type EndpointStatusEnum string

const (
	EndpointStatusEnumOutOfService   EndpointStatusEnum = "OutOfService"
	EndpointStatusEnumCreating       EndpointStatusEnum = "Creating"
	EndpointStatusEnumUpdating       EndpointStatusEnum = "Updating"
	EndpointStatusEnumSystemUpdating EndpointStatusEnum = "SystemUpdating"
	EndpointStatusEnumRollingBack    EndpointStatusEnum = "RollingBack"
	EndpointStatusEnumInService      EndpointStatusEnum = "InService"
	EndpointStatusEnumDeleting       EndpointStatusEnum = "Deleting"
	EndpointStatusEnumFailed         EndpointStatusEnum = "Failed"
)

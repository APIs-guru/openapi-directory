package shared




type ResourceTypeEnum string

const (
    ResourceTypeEnumEc2Instance ResourceTypeEnum = "EC2_INSTANCE"
ResourceTypeEnumEc2Host ResourceTypeEnum = "EC2_HOST"
ResourceTypeEnumEc2Ami ResourceTypeEnum = "EC2_AMI"
ResourceTypeEnumRds ResourceTypeEnum = "RDS"
ResourceTypeEnumSystemsManagerManagedInstance ResourceTypeEnum = "SYSTEMS_MANAGER_MANAGED_INSTANCE"
)



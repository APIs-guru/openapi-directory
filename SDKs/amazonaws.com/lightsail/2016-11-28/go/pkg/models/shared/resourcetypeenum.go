package shared

type ResourceTypeEnum string

const (
	ResourceTypeEnumContainerService           ResourceTypeEnum = "ContainerService"
	ResourceTypeEnumInstance                   ResourceTypeEnum = "Instance"
	ResourceTypeEnumStaticIP                   ResourceTypeEnum = "StaticIp"
	ResourceTypeEnumKeyPair                    ResourceTypeEnum = "KeyPair"
	ResourceTypeEnumInstanceSnapshot           ResourceTypeEnum = "InstanceSnapshot"
	ResourceTypeEnumDomain                     ResourceTypeEnum = "Domain"
	ResourceTypeEnumPeeredVpc                  ResourceTypeEnum = "PeeredVpc"
	ResourceTypeEnumLoadBalancer               ResourceTypeEnum = "LoadBalancer"
	ResourceTypeEnumLoadBalancerTLSCertificate ResourceTypeEnum = "LoadBalancerTlsCertificate"
	ResourceTypeEnumDisk                       ResourceTypeEnum = "Disk"
	ResourceTypeEnumDiskSnapshot               ResourceTypeEnum = "DiskSnapshot"
	ResourceTypeEnumRelationalDatabase         ResourceTypeEnum = "RelationalDatabase"
	ResourceTypeEnumRelationalDatabaseSnapshot ResourceTypeEnum = "RelationalDatabaseSnapshot"
	ResourceTypeEnumExportSnapshotRecord       ResourceTypeEnum = "ExportSnapshotRecord"
	ResourceTypeEnumCloudFormationStackRecord  ResourceTypeEnum = "CloudFormationStackRecord"
	ResourceTypeEnumAlarm                      ResourceTypeEnum = "Alarm"
	ResourceTypeEnumContactMethod              ResourceTypeEnum = "ContactMethod"
	ResourceTypeEnumDistribution               ResourceTypeEnum = "Distribution"
	ResourceTypeEnumCertificate                ResourceTypeEnum = "Certificate"
	ResourceTypeEnumBucket                     ResourceTypeEnum = "Bucket"
)

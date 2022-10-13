package shared

type ProtectedResourceTypeEnum string

const (
	ProtectedResourceTypeEnumCloudfrontDistribution  ProtectedResourceTypeEnum = "CLOUDFRONT_DISTRIBUTION"
	ProtectedResourceTypeEnumRoute53HostedZone       ProtectedResourceTypeEnum = "ROUTE_53_HOSTED_ZONE"
	ProtectedResourceTypeEnumElasticIPAllocation     ProtectedResourceTypeEnum = "ELASTIC_IP_ALLOCATION"
	ProtectedResourceTypeEnumClassicLoadBalancer     ProtectedResourceTypeEnum = "CLASSIC_LOAD_BALANCER"
	ProtectedResourceTypeEnumApplicationLoadBalancer ProtectedResourceTypeEnum = "APPLICATION_LOAD_BALANCER"
	ProtectedResourceTypeEnumGlobalAccelerator       ProtectedResourceTypeEnum = "GLOBAL_ACCELERATOR"
)

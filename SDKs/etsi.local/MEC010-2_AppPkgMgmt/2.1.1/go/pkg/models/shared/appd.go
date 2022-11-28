package shared

type AppD struct {
	AppDID                         string
	AppDNSRule                     []DNSRuleDescriptor
	AppDVersion                    string
	AppDescription                 string
	AppExtCpd                      []AppExternalCpd
	AppFeatureOptional             []FeatureDependency
	AppFeatureRequired             []FeatureDependency
	AppInfoName                    *string
	AppLatency                     *LatencyDescriptor
	AppName                        string
	AppProvider                    string
	AppServiceOptional             []ServiceDependency
	AppServiceProduced             []ServiceDescriptor
	AppServiceRequired             []ServiceDependency
	AppSoftVersion                 string
	AppTrafficRule                 []TrafficRuleDescriptor
	ChangeAppInstanceStateOpConfig *string
	MecVersion                     []string
	SwImageDescriptor              string
	TerminateAppInstanceOpConfig   *string
	TransportDependencies          []TransportDependency
	VirtualComputeDescriptor       string
	VirtualStorageDescriptor       []string
}

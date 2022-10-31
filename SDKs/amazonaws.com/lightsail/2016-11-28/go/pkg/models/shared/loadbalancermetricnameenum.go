package shared

type LoadBalancerMetricNameEnum string

const (
	LoadBalancerMetricNameEnumClientTLSNegotiationErrorCount LoadBalancerMetricNameEnum = "ClientTLSNegotiationErrorCount"
	LoadBalancerMetricNameEnumHealthyHostCount               LoadBalancerMetricNameEnum = "HealthyHostCount"
	LoadBalancerMetricNameEnumUnhealthyHostCount             LoadBalancerMetricNameEnum = "UnhealthyHostCount"
	LoadBalancerMetricNameEnumHTTPCodeLb4XxCount             LoadBalancerMetricNameEnum = "HTTPCode_LB_4XX_Count"
	LoadBalancerMetricNameEnumHTTPCodeLb5XxCount             LoadBalancerMetricNameEnum = "HTTPCode_LB_5XX_Count"
	LoadBalancerMetricNameEnumHTTPCodeInstance2XxCount       LoadBalancerMetricNameEnum = "HTTPCode_Instance_2XX_Count"
	LoadBalancerMetricNameEnumHTTPCodeInstance3XxCount       LoadBalancerMetricNameEnum = "HTTPCode_Instance_3XX_Count"
	LoadBalancerMetricNameEnumHTTPCodeInstance4XxCount       LoadBalancerMetricNameEnum = "HTTPCode_Instance_4XX_Count"
	LoadBalancerMetricNameEnumHTTPCodeInstance5XxCount       LoadBalancerMetricNameEnum = "HTTPCode_Instance_5XX_Count"
	LoadBalancerMetricNameEnumInstanceResponseTime           LoadBalancerMetricNameEnum = "InstanceResponseTime"
	LoadBalancerMetricNameEnumRejectedConnectionCount        LoadBalancerMetricNameEnum = "RejectedConnectionCount"
	LoadBalancerMetricNameEnumRequestCount                   LoadBalancerMetricNameEnum = "RequestCount"
)

package shared

type MetricNameEnum string

const (
	MetricNameEnumCPUUtilization                 MetricNameEnum = "CPUUtilization"
	MetricNameEnumNetworkIn                      MetricNameEnum = "NetworkIn"
	MetricNameEnumNetworkOut                     MetricNameEnum = "NetworkOut"
	MetricNameEnumStatusCheckFailed              MetricNameEnum = "StatusCheckFailed"
	MetricNameEnumStatusCheckFailedInstance      MetricNameEnum = "StatusCheckFailed_Instance"
	MetricNameEnumStatusCheckFailedSystem        MetricNameEnum = "StatusCheckFailed_System"
	MetricNameEnumClientTLSNegotiationErrorCount MetricNameEnum = "ClientTLSNegotiationErrorCount"
	MetricNameEnumHealthyHostCount               MetricNameEnum = "HealthyHostCount"
	MetricNameEnumUnhealthyHostCount             MetricNameEnum = "UnhealthyHostCount"
	MetricNameEnumHTTPCodeLb4XxCount             MetricNameEnum = "HTTPCode_LB_4XX_Count"
	MetricNameEnumHTTPCodeLb5XxCount             MetricNameEnum = "HTTPCode_LB_5XX_Count"
	MetricNameEnumHTTPCodeInstance2XxCount       MetricNameEnum = "HTTPCode_Instance_2XX_Count"
	MetricNameEnumHTTPCodeInstance3XxCount       MetricNameEnum = "HTTPCode_Instance_3XX_Count"
	MetricNameEnumHTTPCodeInstance4XxCount       MetricNameEnum = "HTTPCode_Instance_4XX_Count"
	MetricNameEnumHTTPCodeInstance5XxCount       MetricNameEnum = "HTTPCode_Instance_5XX_Count"
	MetricNameEnumInstanceResponseTime           MetricNameEnum = "InstanceResponseTime"
	MetricNameEnumRejectedConnectionCount        MetricNameEnum = "RejectedConnectionCount"
	MetricNameEnumRequestCount                   MetricNameEnum = "RequestCount"
	MetricNameEnumDatabaseConnections            MetricNameEnum = "DatabaseConnections"
	MetricNameEnumDiskQueueDepth                 MetricNameEnum = "DiskQueueDepth"
	MetricNameEnumFreeStorageSpace               MetricNameEnum = "FreeStorageSpace"
	MetricNameEnumNetworkReceiveThroughput       MetricNameEnum = "NetworkReceiveThroughput"
	MetricNameEnumNetworkTransmitThroughput      MetricNameEnum = "NetworkTransmitThroughput"
	MetricNameEnumBurstCapacityTime              MetricNameEnum = "BurstCapacityTime"
	MetricNameEnumBurstCapacityPercentage        MetricNameEnum = "BurstCapacityPercentage"
)

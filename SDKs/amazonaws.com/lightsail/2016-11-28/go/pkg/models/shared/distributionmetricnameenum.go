package shared




type DistributionMetricNameEnum string

const (
    DistributionMetricNameEnumRequests DistributionMetricNameEnum = "Requests"
DistributionMetricNameEnumBytesDownloaded DistributionMetricNameEnum = "BytesDownloaded"
DistributionMetricNameEnumBytesUploaded DistributionMetricNameEnum = "BytesUploaded"
DistributionMetricNameEnumTotalErrorRate DistributionMetricNameEnum = "TotalErrorRate"
DistributionMetricNameEnumHttp4xxErrorRate DistributionMetricNameEnum = "Http4xxErrorRate"
DistributionMetricNameEnumHttp5xxErrorRate DistributionMetricNameEnum = "Http5xxErrorRate"
)



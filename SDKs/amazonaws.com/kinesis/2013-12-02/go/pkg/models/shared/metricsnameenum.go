package shared




type MetricsNameEnum string

const (
    MetricsNameEnumIncomingBytes MetricsNameEnum = "IncomingBytes"
MetricsNameEnumIncomingRecords MetricsNameEnum = "IncomingRecords"
MetricsNameEnumOutgoingBytes MetricsNameEnum = "OutgoingBytes"
MetricsNameEnumOutgoingRecords MetricsNameEnum = "OutgoingRecords"
MetricsNameEnumWriteProvisionedThroughputExceeded MetricsNameEnum = "WriteProvisionedThroughputExceeded"
MetricsNameEnumReadProvisionedThroughputExceeded MetricsNameEnum = "ReadProvisionedThroughputExceeded"
MetricsNameEnumIteratorAgeMilliseconds MetricsNameEnum = "IteratorAgeMilliseconds"
MetricsNameEnumAll MetricsNameEnum = "ALL"
)



package shared

type UsageRecordResultStatusEnum string

const (
	UsageRecordResultStatusEnumSuccess               UsageRecordResultStatusEnum = "Success"
	UsageRecordResultStatusEnumCustomerNotSubscribed UsageRecordResultStatusEnum = "CustomerNotSubscribed"
	UsageRecordResultStatusEnumDuplicateRecord       UsageRecordResultStatusEnum = "DuplicateRecord"
)

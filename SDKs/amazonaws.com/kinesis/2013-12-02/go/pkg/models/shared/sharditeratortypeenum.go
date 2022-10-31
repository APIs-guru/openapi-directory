package shared

type ShardIteratorTypeEnum string

const (
	ShardIteratorTypeEnumAtSequenceNumber    ShardIteratorTypeEnum = "AT_SEQUENCE_NUMBER"
	ShardIteratorTypeEnumAfterSequenceNumber ShardIteratorTypeEnum = "AFTER_SEQUENCE_NUMBER"
	ShardIteratorTypeEnumTrimHorizon         ShardIteratorTypeEnum = "TRIM_HORIZON"
	ShardIteratorTypeEnumLatest              ShardIteratorTypeEnum = "LATEST"
	ShardIteratorTypeEnumAtTimestamp         ShardIteratorTypeEnum = "AT_TIMESTAMP"
)

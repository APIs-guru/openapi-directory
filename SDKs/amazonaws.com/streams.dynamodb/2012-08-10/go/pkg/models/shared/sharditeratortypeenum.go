package shared




type ShardIteratorTypeEnum string

const (
    ShardIteratorTypeEnumTrimHorizon ShardIteratorTypeEnum = "TRIM_HORIZON"
ShardIteratorTypeEnumLatest ShardIteratorTypeEnum = "LATEST"
ShardIteratorTypeEnumAtSequenceNumber ShardIteratorTypeEnum = "AT_SEQUENCE_NUMBER"
ShardIteratorTypeEnumAfterSequenceNumber ShardIteratorTypeEnum = "AFTER_SEQUENCE_NUMBER"
)



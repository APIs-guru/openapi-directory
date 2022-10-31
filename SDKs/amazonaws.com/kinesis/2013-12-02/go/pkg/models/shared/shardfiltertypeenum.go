package shared




type ShardFilterTypeEnum string

const (
    ShardFilterTypeEnumAfterShardID ShardFilterTypeEnum = "AFTER_SHARD_ID"
ShardFilterTypeEnumAtTrimHorizon ShardFilterTypeEnum = "AT_TRIM_HORIZON"
ShardFilterTypeEnumFromTrimHorizon ShardFilterTypeEnum = "FROM_TRIM_HORIZON"
ShardFilterTypeEnumAtLatest ShardFilterTypeEnum = "AT_LATEST"
ShardFilterTypeEnumAtTimestamp ShardFilterTypeEnum = "AT_TIMESTAMP"
ShardFilterTypeEnumFromTimestamp ShardFilterTypeEnum = "FROM_TIMESTAMP"
)



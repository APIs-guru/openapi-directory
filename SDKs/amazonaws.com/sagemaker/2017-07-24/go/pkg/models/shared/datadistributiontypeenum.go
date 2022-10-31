package shared




type DataDistributionTypeEnum string

const (
    DataDistributionTypeEnumFullyReplicated DataDistributionTypeEnum = "FullyReplicated"
DataDistributionTypeEnumShardedByS3Key DataDistributionTypeEnum = "ShardedByS3Key"
)



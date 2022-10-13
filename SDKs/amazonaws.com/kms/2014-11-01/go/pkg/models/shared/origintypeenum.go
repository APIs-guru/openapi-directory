package shared

type OriginTypeEnum string

const (
	OriginTypeEnumAwsKms      OriginTypeEnum = "AWS_KMS"
	OriginTypeEnumExternal    OriginTypeEnum = "EXTERNAL"
	OriginTypeEnumAwsCloudhsm OriginTypeEnum = "AWS_CLOUDHSM"
)

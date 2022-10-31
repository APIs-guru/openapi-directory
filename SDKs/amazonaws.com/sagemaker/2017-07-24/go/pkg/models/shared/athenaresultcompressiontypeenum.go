package shared

type AthenaResultCompressionTypeEnum string

const (
	AthenaResultCompressionTypeEnumGzip   AthenaResultCompressionTypeEnum = "GZIP"
	AthenaResultCompressionTypeEnumSnappy AthenaResultCompressionTypeEnum = "SNAPPY"
	AthenaResultCompressionTypeEnumZlib   AthenaResultCompressionTypeEnum = "ZLIB"
)

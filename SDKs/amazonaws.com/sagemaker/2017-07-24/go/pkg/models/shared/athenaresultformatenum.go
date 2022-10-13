package shared

type AthenaResultFormatEnum string

const (
	AthenaResultFormatEnumParquet  AthenaResultFormatEnum = "PARQUET"
	AthenaResultFormatEnumOrc      AthenaResultFormatEnum = "ORC"
	AthenaResultFormatEnumAvro     AthenaResultFormatEnum = "AVRO"
	AthenaResultFormatEnumJSON     AthenaResultFormatEnum = "JSON"
	AthenaResultFormatEnumTextfile AthenaResultFormatEnum = "TEXTFILE"
)

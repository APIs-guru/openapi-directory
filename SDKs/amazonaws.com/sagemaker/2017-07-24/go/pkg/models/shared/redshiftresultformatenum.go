package shared

type RedshiftResultFormatEnum string

const (
	RedshiftResultFormatEnumParquet RedshiftResultFormatEnum = "PARQUET"
	RedshiftResultFormatEnumCsv     RedshiftResultFormatEnum = "CSV"
)

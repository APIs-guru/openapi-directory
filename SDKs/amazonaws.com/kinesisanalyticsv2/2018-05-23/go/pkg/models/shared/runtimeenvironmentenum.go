package shared

type RuntimeEnvironmentEnum string

const (
	RuntimeEnvironmentEnumSql10           RuntimeEnvironmentEnum = "SQL-1_0"
	RuntimeEnvironmentEnumFlink16         RuntimeEnvironmentEnum = "FLINK-1_6"
	RuntimeEnvironmentEnumFlink18         RuntimeEnvironmentEnum = "FLINK-1_8"
	RuntimeEnvironmentEnumFlink111        RuntimeEnvironmentEnum = "FLINK-1_11"
	RuntimeEnvironmentEnumZeppelinFlink10 RuntimeEnvironmentEnum = "ZEPPELIN-FLINK-1_0"
)

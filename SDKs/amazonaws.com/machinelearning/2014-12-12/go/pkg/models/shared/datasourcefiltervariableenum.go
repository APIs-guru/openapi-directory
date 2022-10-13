package shared

type DataSourceFilterVariableEnum string

const (
	DataSourceFilterVariableEnumCreatedAt      DataSourceFilterVariableEnum = "CreatedAt"
	DataSourceFilterVariableEnumLastUpdatedAt  DataSourceFilterVariableEnum = "LastUpdatedAt"
	DataSourceFilterVariableEnumStatus         DataSourceFilterVariableEnum = "Status"
	DataSourceFilterVariableEnumName           DataSourceFilterVariableEnum = "Name"
	DataSourceFilterVariableEnumDataLocationS3 DataSourceFilterVariableEnum = "DataLocationS3"
	DataSourceFilterVariableEnumIamUser        DataSourceFilterVariableEnum = "IAMUser"
)

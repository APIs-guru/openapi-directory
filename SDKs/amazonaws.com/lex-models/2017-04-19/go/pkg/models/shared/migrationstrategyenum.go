package shared

type MigrationStrategyEnum string

const (
	MigrationStrategyEnumCreateNew      MigrationStrategyEnum = "CREATE_NEW"
	MigrationStrategyEnumUpdateExisting MigrationStrategyEnum = "UPDATE_EXISTING"
)

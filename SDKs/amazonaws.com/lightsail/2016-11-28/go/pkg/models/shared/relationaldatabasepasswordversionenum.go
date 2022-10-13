package shared

type RelationalDatabasePasswordVersionEnum string

const (
	RelationalDatabasePasswordVersionEnumCurrent  RelationalDatabasePasswordVersionEnum = "CURRENT"
	RelationalDatabasePasswordVersionEnumPrevious RelationalDatabasePasswordVersionEnum = "PREVIOUS"
	RelationalDatabasePasswordVersionEnumPending  RelationalDatabasePasswordVersionEnum = "PENDING"
)

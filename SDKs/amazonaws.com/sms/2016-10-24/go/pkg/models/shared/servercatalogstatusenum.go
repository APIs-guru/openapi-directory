package shared

type ServerCatalogStatusEnum string

const (
	ServerCatalogStatusEnumNotImported ServerCatalogStatusEnum = "NOT_IMPORTED"
	ServerCatalogStatusEnumImporting   ServerCatalogStatusEnum = "IMPORTING"
	ServerCatalogStatusEnumAvailable   ServerCatalogStatusEnum = "AVAILABLE"
	ServerCatalogStatusEnumDeleted     ServerCatalogStatusEnum = "DELETED"
	ServerCatalogStatusEnumExpired     ServerCatalogStatusEnum = "EXPIRED"
)

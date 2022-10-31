package shared




type BotStatusEnum string

const (
    BotStatusEnumCreating BotStatusEnum = "Creating"
BotStatusEnumAvailable BotStatusEnum = "Available"
BotStatusEnumInactive BotStatusEnum = "Inactive"
BotStatusEnumDeleting BotStatusEnum = "Deleting"
BotStatusEnumFailed BotStatusEnum = "Failed"
BotStatusEnumVersioning BotStatusEnum = "Versioning"
BotStatusEnumImporting BotStatusEnum = "Importing"
)



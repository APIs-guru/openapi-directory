package shared

type BotLocaleStatusEnum string

const (
	BotLocaleStatusEnumCreating            BotLocaleStatusEnum = "Creating"
	BotLocaleStatusEnumBuilding            BotLocaleStatusEnum = "Building"
	BotLocaleStatusEnumBuilt               BotLocaleStatusEnum = "Built"
	BotLocaleStatusEnumReadyExpressTesting BotLocaleStatusEnum = "ReadyExpressTesting"
	BotLocaleStatusEnumFailed              BotLocaleStatusEnum = "Failed"
	BotLocaleStatusEnumDeleting            BotLocaleStatusEnum = "Deleting"
	BotLocaleStatusEnumNotBuilt            BotLocaleStatusEnum = "NotBuilt"
	BotLocaleStatusEnumImporting           BotLocaleStatusEnum = "Importing"
)

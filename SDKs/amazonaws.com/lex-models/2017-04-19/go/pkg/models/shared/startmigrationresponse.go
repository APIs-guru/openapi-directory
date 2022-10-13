package shared

import (
	"time"
)

type StartMigrationResponse struct {
	MigrationID        *string                `json:"migrationId"`
	MigrationStrategy  *MigrationStrategyEnum `json:"migrationStrategy"`
	MigrationTimestamp *time.Time             `json:"migrationTimestamp"`
	V1BotLocale        *LocaleEnum            `json:"v1BotLocale"`
	V1BotName          *string                `json:"v1BotName"`
	V1BotVersion       *string                `json:"v1BotVersion"`
	V2BotID            *string                `json:"v2BotId"`
	V2BotRole          *string                `json:"v2BotRole"`
}

package shared

import (
	"time"
)

// MigrationSummary
// Provides information about migrating a bot from Amazon Lex V1 to Amazon Lex V2.
type MigrationSummary struct {
	MigrationID        *string                `json:"migrationId,omitempty"`
	MigrationStatus    *MigrationStatusEnum   `json:"migrationStatus,omitempty"`
	MigrationStrategy  *MigrationStrategyEnum `json:"migrationStrategy,omitempty"`
	MigrationTimestamp *time.Time             `json:"migrationTimestamp,omitempty"`
	V1BotLocale        *LocaleEnum            `json:"v1BotLocale,omitempty"`
	V1BotName          *string                `json:"v1BotName,omitempty"`
	V1BotVersion       *string                `json:"v1BotVersion,omitempty"`
	V2BotID            *string                `json:"v2BotId,omitempty"`
	V2BotRole          *string                `json:"v2BotRole,omitempty"`
}

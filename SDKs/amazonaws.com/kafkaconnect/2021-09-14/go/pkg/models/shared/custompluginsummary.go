package shared

import (
	"time"
)

type CustomPluginSummary struct {
	CreationTime      *time.Time                   `json:"creationTime"`
	CustomPluginArn   *string                      `json:"customPluginArn"`
	CustomPluginState *CustomPluginStateEnum       `json:"customPluginState"`
	Description       *string                      `json:"description"`
	LatestRevision    *CustomPluginRevisionSummary `json:"latestRevision"`
	Name              *string                      `json:"name"`
}

package shared

import (
	"time"
)

// CustomPluginRevisionSummary
// Details about the revision of a custom plugin.
type CustomPluginRevisionSummary struct {
	ContentType     *CustomPluginContentTypeEnum     `json:"contentType,omitempty"`
	CreationTime    *time.Time                       `json:"creationTime,omitempty"`
	Description     *string                          `json:"description,omitempty"`
	FileDescription *CustomPluginFileDescription     `json:"fileDescription,omitempty"`
	Location        *CustomPluginLocationDescription `json:"location,omitempty"`
	Revision        *int64                           `json:"revision,omitempty"`
}

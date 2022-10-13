package shared

import (
	"time"
)

type CustomPluginRevisionSummary struct {
	ContentType     *CustomPluginContentTypeEnum     `json:"contentType"`
	CreationTime    *time.Time                       `json:"creationTime"`
	Description     *string                          `json:"description"`
	FileDescription *CustomPluginFileDescription     `json:"fileDescription"`
	Location        *CustomPluginLocationDescription `json:"location"`
	Revision        *int64                           `json:"revision"`
}

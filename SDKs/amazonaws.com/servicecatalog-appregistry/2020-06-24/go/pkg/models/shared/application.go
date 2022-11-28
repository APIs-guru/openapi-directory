package shared

import (
	"time"
)

// Application
// Represents a Amazon Web Services Service Catalog AppRegistry application that is the top-level node in a hierarchy of related cloud resource abstractions.
type Application struct {
	Arn            *string           `json:"arn,omitempty"`
	CreationTime   *time.Time        `json:"creationTime,omitempty"`
	Description    *string           `json:"description,omitempty"`
	ID             *string           `json:"id,omitempty"`
	LastUpdateTime *time.Time        `json:"lastUpdateTime,omitempty"`
	Name           *string           `json:"name,omitempty"`
	Tags           map[string]string `json:"tags,omitempty"`
}

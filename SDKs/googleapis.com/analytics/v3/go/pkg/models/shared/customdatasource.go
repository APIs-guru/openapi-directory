package shared

import (
	"time"
)

type CustomDataSourceChildLink struct {
	Href *string `json:"href,omitempty"`
	Type *string `json:"type,omitempty"`
}

type CustomDataSourceParentLink struct {
	Href *string `json:"href,omitempty"`
	Type *string `json:"type,omitempty"`
}

type CustomDataSource struct {
	AccountID      *string                     `json:"accountId,omitempty"`
	ChildLink      *CustomDataSourceChildLink  `json:"childLink,omitempty"`
	Created        *time.Time                  `json:"created,omitempty"`
	Description    *string                     `json:"description,omitempty"`
	ID             *string                     `json:"id,omitempty"`
	ImportBehavior *string                     `json:"importBehavior,omitempty"`
	Kind           *string                     `json:"kind,omitempty"`
	Name           *string                     `json:"name,omitempty"`
	ParentLink     *CustomDataSourceParentLink `json:"parentLink,omitempty"`
	ProfilesLinked []string                    `json:"profilesLinked,omitempty"`
	Schema         []string                    `json:"schema,omitempty"`
	SelfLink       *string                     `json:"selfLink,omitempty"`
	Type           *string                     `json:"type,omitempty"`
	Updated        *time.Time                  `json:"updated,omitempty"`
	UploadType     *string                     `json:"uploadType,omitempty"`
	WebPropertyID  *string                     `json:"webPropertyId,omitempty"`
}

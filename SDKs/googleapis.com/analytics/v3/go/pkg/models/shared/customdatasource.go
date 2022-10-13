package shared

import (
	"time"
)

type CustomDataSourceChildLink struct {
	Href *string `json:"href"`
	Type *string `json:"type"`
}

type CustomDataSourceParentLink struct {
	Href *string `json:"href"`
	Type *string `json:"type"`
}

type CustomDataSource struct {
	AccountID      *string                     `json:"accountId"`
	ChildLink      *CustomDataSourceChildLink  `json:"childLink"`
	Created        *time.Time                  `json:"created"`
	Description    *string                     `json:"description"`
	ID             *string                     `json:"id"`
	ImportBehavior *string                     `json:"importBehavior"`
	Kind           *string                     `json:"kind"`
	Name           *string                     `json:"name"`
	ParentLink     *CustomDataSourceParentLink `json:"parentLink"`
	ProfilesLinked []string                    `json:"profilesLinked"`
	Schema         []string                    `json:"schema"`
	SelfLink       *string                     `json:"selfLink"`
	Type           *string                     `json:"type"`
	Updated        *time.Time                  `json:"updated"`
	UploadType     *string                     `json:"uploadType"`
	WebPropertyID  *string                     `json:"webPropertyId"`
}

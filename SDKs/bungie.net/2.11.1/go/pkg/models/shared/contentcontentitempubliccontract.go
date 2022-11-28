package shared

import (
	"time"
)

type ContentContentItemPublicContract struct {
	AllowComments               *bool
	Author                      *UserGeneralUser
	AutoEnglishPropertyFallback *bool
	CType                       *string
	CmsPath                     *string
	CommentSummary              *ContentCommentSummary
	ContentID                   *int64
	CreationDate                *time.Time
	HasAgeGate                  *bool
	MinimumAge                  *int32
	ModifyDate                  *time.Time
	Properties                  map[string]map[string]interface{}
	RatingImagePath             *string
	Representations             []ContentContentRepresentation
	Tags                        []string
}

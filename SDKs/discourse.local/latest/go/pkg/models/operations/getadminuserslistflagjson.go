package operations

type GetAdminUsersListFlagJSONFlagEnum string

const (
	GetAdminUsersListFlagJSONFlagEnumActive    GetAdminUsersListFlagJSONFlagEnum = "active"
	GetAdminUsersListFlagJSONFlagEnumNew       GetAdminUsersListFlagJSONFlagEnum = "new"
	GetAdminUsersListFlagJSONFlagEnumStaff     GetAdminUsersListFlagJSONFlagEnum = "staff"
	GetAdminUsersListFlagJSONFlagEnumSuspended GetAdminUsersListFlagJSONFlagEnum = "suspended"
	GetAdminUsersListFlagJSONFlagEnumBlocked   GetAdminUsersListFlagJSONFlagEnum = "blocked"
	GetAdminUsersListFlagJSONFlagEnumSuspect   GetAdminUsersListFlagJSONFlagEnum = "suspect"
)

type GetAdminUsersListFlagJSONPathParams struct {
	Flag GetAdminUsersListFlagJSONFlagEnum `pathParam:"style=simple,explode=false,name=flag"`
}

type GetAdminUsersListFlagJSONAscEnum string

const (
	GetAdminUsersListFlagJSONAscEnumTrue GetAdminUsersListFlagJSONAscEnum = "true"
)

type GetAdminUsersListFlagJSONOrderEnum string

const (
	GetAdminUsersListFlagJSONOrderEnumCreated      GetAdminUsersListFlagJSONOrderEnum = "created"
	GetAdminUsersListFlagJSONOrderEnumLastEmailed  GetAdminUsersListFlagJSONOrderEnum = "last_emailed"
	GetAdminUsersListFlagJSONOrderEnumSeen         GetAdminUsersListFlagJSONOrderEnum = "seen"
	GetAdminUsersListFlagJSONOrderEnumUsername     GetAdminUsersListFlagJSONOrderEnum = "username"
	GetAdminUsersListFlagJSONOrderEnumEmail        GetAdminUsersListFlagJSONOrderEnum = "email"
	GetAdminUsersListFlagJSONOrderEnumTrustLevel   GetAdminUsersListFlagJSONOrderEnum = "trust_level"
	GetAdminUsersListFlagJSONOrderEnumDaysVisited  GetAdminUsersListFlagJSONOrderEnum = "days_visited"
	GetAdminUsersListFlagJSONOrderEnumPostsRead    GetAdminUsersListFlagJSONOrderEnum = "posts_read"
	GetAdminUsersListFlagJSONOrderEnumTopicsViewed GetAdminUsersListFlagJSONOrderEnum = "topics_viewed"
	GetAdminUsersListFlagJSONOrderEnumPosts        GetAdminUsersListFlagJSONOrderEnum = "posts"
	GetAdminUsersListFlagJSONOrderEnumReadTime     GetAdminUsersListFlagJSONOrderEnum = "read_time"
)

type GetAdminUsersListFlagJSONQueryParams struct {
	Asc        *GetAdminUsersListFlagJSONAscEnum   `queryParam:"style=form,explode=true,name=asc"`
	Order      *GetAdminUsersListFlagJSONOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page       *int64                              `queryParam:"style=form,explode=true,name=page"`
	ShowEmails *bool                               `queryParam:"style=form,explode=true,name=show_emails"`
}

type GetAdminUsersListFlagJSONRequest struct {
	PathParams  GetAdminUsersListFlagJSONPathParams
	QueryParams GetAdminUsersListFlagJSONQueryParams
}

type GetAdminUsersListFlagJSON200ApplicationJSON struct {
	Active                 bool          `json:"active"`
	Admin                  bool          `json:"admin"`
	AvatarTemplate         string        `json:"avatar_template"`
	CreatedAt              string        `json:"created_at"`
	CreatedAtAge           interface{}   `json:"created_at_age"`
	DaysVisited            int64         `json:"days_visited"`
	Email                  *string       `json:"email,omitempty"`
	FlagLevel              int64         `json:"flag_level"`
	ID                     int64         `json:"id"`
	LastEmailedAge         interface{}   `json:"last_emailed_age"`
	LastEmailedAt          string        `json:"last_emailed_at"`
	LastSeenAge            interface{}   `json:"last_seen_age"`
	LastSeenAt             string        `json:"last_seen_at"`
	ManualLockedTrustLevel string        `json:"manual_locked_trust_level"`
	Moderator              bool          `json:"moderator"`
	Name                   string        `json:"name"`
	PostCount              int64         `json:"post_count"`
	PostsReadCount         int64         `json:"posts_read_count"`
	SecondaryEmails        []interface{} `json:"secondary_emails,omitempty"`
	Staged                 bool          `json:"staged"`
	TimeRead               int64         `json:"time_read"`
	Title                  string        `json:"title"`
	TopicsEntered          int64         `json:"topics_entered"`
	TrustLevel             int64         `json:"trust_level"`
	Username               string        `json:"username"`
}

type GetAdminUsersListFlagJSONResponse struct {
	ContentType                                        string
	GetAdminUsersListFlagJSON200ApplicationJSONObjects []GetAdminUsersListFlagJSON200ApplicationJSON
	StatusCode                                         int64
}

package operations

type PostAdminGroupsJSONRequestBodyGroup struct {
	Name string `json:"name"`
}

type PostAdminGroupsJSONRequestBody struct {
	Group PostAdminGroupsJSONRequestBodyGroup `json:"group"`
}

type PostAdminGroupsJSONRequest struct {
	Request *PostAdminGroupsJSONRequestBody `request:"mediaType=application/json"`
}

type PostAdminGroupsJSON200ApplicationJSONBasicGroup struct {
	AllowMembershipRequests         *bool   `json:"allow_membership_requests"`
	Automatic                       *bool   `json:"automatic"`
	AutomaticMembershipEmailDomains *string `json:"automatic_membership_email_domains"`
	AutomaticMembershipRetroactive  *bool   `json:"automatic_membership_retroactive"`
	BioCooked                       *string `json:"bio_cooked"`
	BioExcerpt                      *string `json:"bio_excerpt"`
	BioRaw                          *string `json:"bio_raw"`
	CanSeeMembers                   *bool   `json:"can_see_members"`
	DefaultNotificationLevel        *int64  `json:"default_notification_level"`
	FlairBgColor                    *string `json:"flair_bg_color"`
	FlairColor                      *string `json:"flair_color"`
	FlairURL                        *string `json:"flair_url"`
	FullName                        *string `json:"full_name"`
	GrantTrustLevel                 *string `json:"grant_trust_level"`
	HasMessages                     *bool   `json:"has_messages"`
	ID                              int64   `json:"id"`
	IncomingEmail                   *string `json:"incoming_email"`
	MembershipRequestTemplate       *string `json:"membership_request_template"`
	MembershipVisibilityLevel       *int64  `json:"membership_visibility_level"`
	MentionableLevel                *int64  `json:"mentionable_level"`
	MessageableLevel                *int64  `json:"messageable_level"`
	Name                            *string `json:"name"`
	PrimaryGroup                    *bool   `json:"primary_group"`
	PublicAdmission                 *bool   `json:"public_admission"`
	PublicExit                      *bool   `json:"public_exit"`
	PublishReadState                *bool   `json:"publish_read_state"`
	Title                           *string `json:"title"`
	UserCount                       *int64  `json:"user_count"`
	VisibilityLevel                 *int64  `json:"visibility_level"`
}

type PostAdminGroupsJSON200ApplicationJSON struct {
	BasicGroup PostAdminGroupsJSON200ApplicationJSONBasicGroup `json:"basic_group"`
}

type PostAdminGroupsJSONResponse struct {
	ContentType                                 string
	PostAdminGroupsJSON200ApplicationJSONObject *PostAdminGroupsJSON200ApplicationJSON
	StatusCode                                  int64
}

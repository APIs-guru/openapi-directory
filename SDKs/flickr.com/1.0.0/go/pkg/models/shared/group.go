package shared

type GroupBlast struct {
	Content        *string `json:"_content,omitempty"`
	DateBlastAdded *string `json:"date_blast_added,omitempty"`
	UserID         *string `json:"user_id,omitempty"`
}

type GroupDescription struct {
	Content *string `json:"_content,omitempty"`
}

type GroupMembers struct {
	Content *string `json:"_content,omitempty"`
}

type GroupName struct {
	Content *string `json:"_content,omitempty"`
}

type GroupPoolCount struct {
	Content *string `json:"_content,omitempty"`
}

type GroupPrivacy struct {
	Content *string `json:"_content,omitempty"`
}

type GroupRestrictions struct {
	ArtOk        *bool `json:"art_ok,omitempty"`
	HasGeo       *bool `json:"has_geo,omitempty"`
	ImagesOk     *bool `json:"images_ok,omitempty"`
	ModerateOk   *bool `json:"moderate_ok,omitempty"`
	PhotosOk     *bool `json:"photos_ok,omitempty"`
	RestrictedOk *bool `json:"restricted_ok,omitempty"`
	SafeOk       *bool `json:"safe_ok,omitempty"`
	ScreensOk    *bool `json:"screens_ok,omitempty"`
	VideosOk     *bool `json:"videos_ok,omitempty"`
}

type GroupRoles struct {
	Admin     *string `json:"admin,omitempty"`
	Member    *string `json:"member,omitempty"`
	Moderator *string `json:"moderator,omitempty"`
}

type GroupRules struct {
	Content *string `json:"_content,omitempty"`
}

type GroupThrottle struct {
	Count     *int64  `json:"count,omitempty"`
	Mode      *string `json:"mode,omitempty"`
	Remaining *string `json:"remaining,omitempty"`
}

type GroupTopicCount struct {
	Content *string `json:"_content,omitempty"`
}

type Group struct {
	Blast            *GroupBlast        `json:"blast,omitempty"`
	Cover            *Cover             `json:"cover,omitempty"`
	CoverphotoFarm   *string            `json:"coverphoto_farm,omitempty"`
	CoverphotoServer *string            `json:"coverphoto_server,omitempty"`
	CoverphotoURL    *PhotoUrLs         `json:"coverphoto_url,omitempty"`
	Description      *GroupDescription  `json:"description,omitempty"`
	Iconfarm         *string            `json:"iconfarm,omitempty"`
	Iconserver       *string            `json:"iconserver,omitempty"`
	ID               *string            `json:"id,omitempty"`
	IsAdmin          *bool              `json:"is_admin,omitempty"`
	IsMember         *bool              `json:"is_member,omitempty"`
	IsModerator      *bool              `json:"is_moderator,omitempty"`
	Ispoolmoderated  *bool              `json:"ispoolmoderated,omitempty"`
	Lang             *string            `json:"lang,omitempty"`
	Members          *GroupMembers      `json:"members,omitempty"`
	Name             *GroupName         `json:"name,omitempty"`
	PathAlias        *string            `json:"path_alias,omitempty"`
	PoolCount        *GroupPoolCount    `json:"pool_count,omitempty"`
	PoolRows         *int64             `json:"pool_rows,omitempty"`
	Privacy          *GroupPrivacy      `json:"privacy,omitempty"`
	Restrictions     *GroupRestrictions `json:"restrictions,omitempty"`
	Roles            *GroupRoles        `json:"roles,omitempty"`
	Rules            *GroupRules        `json:"rules,omitempty"`
	Throttle         *GroupThrottle     `json:"throttle,omitempty"`
	TopicCount       *GroupTopicCount   `json:"topic_count,omitempty"`
}

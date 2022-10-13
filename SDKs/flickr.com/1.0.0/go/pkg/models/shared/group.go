package shared

type GroupBlast struct {
	Content        *string `json:"_content"`
	DateBlastAdded *string `json:"date_blast_added"`
	UserID         *string `json:"user_id"`
}

type GroupDescription struct {
	Content *string `json:"_content"`
}

type GroupMembers struct {
	Content *string `json:"_content"`
}

type GroupName struct {
	Content *string `json:"_content"`
}

type GroupPoolCount struct {
	Content *string `json:"_content"`
}

type GroupPrivacy struct {
	Content *string `json:"_content"`
}

type GroupRestrictions struct {
	ArtOk        *bool `json:"art_ok"`
	HasGeo       *bool `json:"has_geo"`
	ImagesOk     *bool `json:"images_ok"`
	ModerateOk   *bool `json:"moderate_ok"`
	PhotosOk     *bool `json:"photos_ok"`
	RestrictedOk *bool `json:"restricted_ok"`
	SafeOk       *bool `json:"safe_ok"`
	ScreensOk    *bool `json:"screens_ok"`
	VideosOk     *bool `json:"videos_ok"`
}

type GroupRoles struct {
	Admin     *string `json:"admin"`
	Member    *string `json:"member"`
	Moderator *string `json:"moderator"`
}

type GroupRules struct {
	Content *string `json:"_content"`
}

type GroupThrottle struct {
	Count     *int64  `json:"count"`
	Mode      *string `json:"mode"`
	Remaining *string `json:"remaining"`
}

type GroupTopicCount struct {
	Content *string `json:"_content"`
}

type Group struct {
	Blast            *GroupBlast        `json:"blast"`
	Cover            *Cover             `json:"cover"`
	CoverphotoFarm   *string            `json:"coverphoto_farm"`
	CoverphotoServer *string            `json:"coverphoto_server"`
	CoverphotoURL    *PhotoUrLs         `json:"coverphoto_url"`
	Description      *GroupDescription  `json:"description"`
	Iconfarm         *string            `json:"iconfarm"`
	Iconserver       *string            `json:"iconserver"`
	ID               *string            `json:"id"`
	IsAdmin          *bool              `json:"is_admin"`
	IsMember         *bool              `json:"is_member"`
	IsModerator      *bool              `json:"is_moderator"`
	Ispoolmoderated  *bool              `json:"ispoolmoderated"`
	Lang             *string            `json:"lang"`
	Members          *GroupMembers      `json:"members"`
	Name             *GroupName         `json:"name"`
	PathAlias        *string            `json:"path_alias"`
	PoolCount        *GroupPoolCount    `json:"pool_count"`
	PoolRows         *int64             `json:"pool_rows"`
	Privacy          *GroupPrivacy      `json:"privacy"`
	Restrictions     *GroupRestrictions `json:"restrictions"`
	Roles            *GroupRoles        `json:"roles"`
	Rules            *GroupRules        `json:"rules"`
	Throttle         *GroupThrottle     `json:"throttle"`
	TopicCount       *GroupTopicCount   `json:"topic_count"`
}

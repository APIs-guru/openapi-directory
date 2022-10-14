package shared

type PersonDescription struct {
	Content *string `json:"_content,omitempty"`
}

type PersonDisableKeyboardShortcuts struct {
	Content *string `json:"_content,omitempty"`
}

type PersonLocation struct {
	Content *string `json:"_content,omitempty"`
}

type PersonMboxSha1sum struct {
	Content *string `json:"_content,omitempty"`
}

type PersonMobileurl struct {
	Content *string `json:"_content,omitempty"`
}

type PersonPhotosCount struct {
	Content *string `json:"_content,omitempty"`
}

type PersonPhotosFirstdate struct {
	Content *string `json:"_content,omitempty"`
}

type PersonPhotosFirstdatetaken struct {
	Content *string `json:"_content,omitempty"`
}

type PersonPhotosViews struct {
	Content *string `json:"_content,omitempty"`
}

type PersonPhotos struct {
	Count          *PersonPhotosCount          `json:"count,omitempty"`
	Firstdate      *PersonPhotosFirstdate      `json:"firstdate,omitempty"`
	Firstdatetaken *PersonPhotosFirstdatetaken `json:"firstdatetaken,omitempty"`
	Views          *PersonPhotosViews          `json:"views,omitempty"`
}

type PersonPhotosurl struct {
	Content *string `json:"_content,omitempty"`
}

type PersonProfileurl struct {
	Content *string `json:"_content,omitempty"`
}

type PersonRealname struct {
	Content *string `json:"_content,omitempty"`
}

type PersonTimezone struct {
	Label      *string `json:"label,omitempty"`
	Offset     *string `json:"offset,omitempty"`
	TimezoneID *string `json:"timezone_id,omitempty"`
}

type PersonUnreadMessages struct {
	Content *string `json:"_content,omitempty"`
}

type PersonUsername struct {
	Content *string `json:"_content,omitempty"`
}

type Person struct {
	CanBuyPro                *bool                           `json:"can_buy_pro,omitempty"`
	Cover                    *Cover                          `json:"cover,omitempty"`
	Coverphoto               *PhotoUrLs                      `json:"coverphoto,omitempty"`
	CoverphotoFarm           *string                         `json:"coverphoto_farm,omitempty"`
	CoverphotoServer         *string                         `json:"coverphoto_server,omitempty"`
	Description              *PersonDescription              `json:"description,omitempty"`
	DisableKeyboardShortcuts *PersonDisableKeyboardShortcuts `json:"disable_keyboard_shortcuts,omitempty"`
	Expire                   *bool                           `json:"expire,omitempty"`
	HasStats                 *bool                           `json:"has_stats,omitempty"`
	Iconfarm                 *string                         `json:"iconfarm,omitempty"`
	Iconserver               *string                         `json:"iconserver,omitempty"`
	ID                       *string                         `json:"id,omitempty"`
	IsAdFree                 *bool                           `json:"is_ad_free,omitempty"`
	Ispro                    *bool                           `json:"ispro,omitempty"`
	Location                 *PersonLocation                 `json:"location,omitempty"`
	MboxSha1sum              *PersonMboxSha1sum              `json:"mbox_sha1sum,omitempty"`
	Mobileurl                *PersonMobileurl                `json:"mobileurl,omitempty"`
	Nsid                     *string                         `json:"nsid,omitempty"`
	PathAlias                *string                         `json:"path_alias,omitempty"`
	Photos                   *PersonPhotos                   `json:"photos,omitempty"`
	Photosurl                *PersonPhotosurl                `json:"photosurl,omitempty"`
	Profileurl               *PersonProfileurl               `json:"profileurl,omitempty"`
	Realname                 *PersonRealname                 `json:"realname,omitempty"`
	Timezone                 *PersonTimezone                 `json:"timezone,omitempty"`
	UnreadMessages           *PersonUnreadMessages           `json:"unread_messages,omitempty"`
	UserSecret               *string                         `json:"user_secret,omitempty"`
	Username                 *PersonUsername                 `json:"username,omitempty"`
	Yintl                    *string                         `json:"yintl,omitempty"`
}

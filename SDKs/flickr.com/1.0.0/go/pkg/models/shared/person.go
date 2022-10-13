package shared

type PersonDescription struct {
	Content *string `json:"_content"`
}

type PersonDisableKeyboardShortcuts struct {
	Content *string `json:"_content"`
}

type PersonLocation struct {
	Content *string `json:"_content"`
}

type PersonMboxSha1sum struct {
	Content *string `json:"_content"`
}

type PersonMobileurl struct {
	Content *string `json:"_content"`
}

type PersonPhotosCount struct {
	Content *string `json:"_content"`
}

type PersonPhotosFirstdate struct {
	Content *string `json:"_content"`
}

type PersonPhotosFirstdatetaken struct {
	Content *string `json:"_content"`
}

type PersonPhotosViews struct {
	Content *string `json:"_content"`
}

type PersonPhotos struct {
	Count          *PersonPhotosCount          `json:"count"`
	Firstdate      *PersonPhotosFirstdate      `json:"firstdate"`
	Firstdatetaken *PersonPhotosFirstdatetaken `json:"firstdatetaken"`
	Views          *PersonPhotosViews          `json:"views"`
}

type PersonPhotosurl struct {
	Content *string `json:"_content"`
}

type PersonProfileurl struct {
	Content *string `json:"_content"`
}

type PersonRealname struct {
	Content *string `json:"_content"`
}

type PersonTimezone struct {
	Label      *string `json:"label"`
	Offset     *string `json:"offset"`
	TimezoneID *string `json:"timezone_id"`
}

type PersonUnreadMessages struct {
	Content *string `json:"_content"`
}

type PersonUsername struct {
	Content *string `json:"_content"`
}

type Person struct {
	CanBuyPro                *bool                           `json:"can_buy_pro"`
	Cover                    *Cover                          `json:"cover"`
	Coverphoto               *PhotoUrLs                      `json:"coverphoto"`
	CoverphotoFarm           *string                         `json:"coverphoto_farm"`
	CoverphotoServer         *string                         `json:"coverphoto_server"`
	Description              *PersonDescription              `json:"description"`
	DisableKeyboardShortcuts *PersonDisableKeyboardShortcuts `json:"disable_keyboard_shortcuts"`
	Expire                   *bool                           `json:"expire"`
	HasStats                 *bool                           `json:"has_stats"`
	Iconfarm                 *string                         `json:"iconfarm"`
	Iconserver               *string                         `json:"iconserver"`
	ID                       *string                         `json:"id"`
	IsAdFree                 *bool                           `json:"is_ad_free"`
	Ispro                    *bool                           `json:"ispro"`
	Location                 *PersonLocation                 `json:"location"`
	MboxSha1sum              *PersonMboxSha1sum              `json:"mbox_sha1sum"`
	Mobileurl                *PersonMobileurl                `json:"mobileurl"`
	Nsid                     *string                         `json:"nsid"`
	PathAlias                *string                         `json:"path_alias"`
	Photos                   *PersonPhotos                   `json:"photos"`
	Photosurl                *PersonPhotosurl                `json:"photosurl"`
	Profileurl               *PersonProfileurl               `json:"profileurl"`
	Realname                 *PersonRealname                 `json:"realname"`
	Timezone                 *PersonTimezone                 `json:"timezone"`
	UnreadMessages           *PersonUnreadMessages           `json:"unread_messages"`
	UserSecret               *string                         `json:"user_secret"`
	Username                 *PersonUsername                 `json:"username"`
	Yintl                    *string                         `json:"yintl"`
}

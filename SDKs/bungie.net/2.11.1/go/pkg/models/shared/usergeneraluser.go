package shared

import (
	"time"
)

type UserGeneralUser struct {
	About                  *string
	BlizzardDisplayName    *string
	Context                *UserUserToUserContext
	DisplayName            *string
	FbDisplayName          *string
	FirstAccess            *time.Time
	IsDeleted              *bool
	LastBanReportID        *int64
	LastUpdate             *time.Time
	LegacyPortalUID        *int64
	Locale                 *string
	LocaleInheritDefault   *bool
	MembershipID           *int64
	NormalizedName         *string
	ProfileBanExpire       *time.Time
	ProfilePicture         *int32
	ProfilePicturePath     *string
	ProfilePictureWidePath *string
	ProfileTheme           *int32
	ProfileThemeName       *string
	PsnDisplayName         *string
	ShowActivity           *bool
	ShowGroupMessaging     *bool
	StadiaDisplayName      *string
	StatusDate             *time.Time
	StatusText             *string
	SteamDisplayName       *string
	SuccessMessageFlags    *int64
	TwitchDisplayName      *string
	UniqueName             *string
	UserTitle              *int32
	UserTitleDisplay       *string
	XboxDisplayName        *string
}

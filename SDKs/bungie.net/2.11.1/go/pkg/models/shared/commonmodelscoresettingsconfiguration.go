package shared

type CommonModelsCoreSettingsConfiguration struct {
	ClanBannerDecalColors          []CommonModelsCoreSetting
	ClanBannerDecals               []CommonModelsCoreSetting
	ClanBannerGonfalonColors       []CommonModelsCoreSetting
	ClanBannerGonfalonDetailColors []CommonModelsCoreSetting
	ClanBannerGonfalonDetails      []CommonModelsCoreSetting
	ClanBannerGonfalons            []CommonModelsCoreSetting
	ClanBannerStandards            []CommonModelsCoreSetting
	Destiny2CoreSettings           *CommonModelsDestiny2CoreSettings
	DestinyMembershipTypes         []CommonModelsCoreSetting
	EmailSettings                  *UserEmailSettings
	Environment                    *string
	FireteamActivities             []CommonModelsCoreSetting
	ForumCategories                []CommonModelsCoreSetting
	GroupAvatars                   []CommonModelsCoreSetting
	IgnoreReasons                  []CommonModelsCoreSetting
	RecruitmentActivities          []CommonModelsCoreSetting
	RecruitmentMiscTags            []CommonModelsCoreSetting
	RecruitmentPlatformTags        []CommonModelsCoreSetting
	SystemContentLocales           []CommonModelsCoreSetting
	Systems                        map[string]CommonModelsCoreSystem
	UserContentLocales             []CommonModelsCoreSetting
}

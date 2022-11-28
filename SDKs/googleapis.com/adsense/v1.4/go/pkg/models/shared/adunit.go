package shared

// AdUnitContentAdsSettingsBackupOption
// The backup option to be used in instances where no ad is available.
type AdUnitContentAdsSettingsBackupOption struct {
	Color *string `json:"color,omitempty"`
	Type  *string `json:"type,omitempty"`
	URL   *string `json:"url,omitempty"`
}

// AdUnitContentAdsSettings
// Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).
type AdUnitContentAdsSettings struct {
	BackupOption *AdUnitContentAdsSettingsBackupOption `json:"backupOption,omitempty"`
	Size         *string                               `json:"size,omitempty"`
	Type         *string                               `json:"type,omitempty"`
}

// AdUnitFeedAdsSettings
// Settings specific to feed ads (AFF) - deprecated.
type AdUnitFeedAdsSettings struct {
	AdPosition       *string `json:"adPosition,omitempty"`
	Frequency        *int32  `json:"frequency,omitempty"`
	MinimumWordCount *int32  `json:"minimumWordCount,omitempty"`
	Type             *string `json:"type,omitempty"`
}

// AdUnitMobileContentAdsSettings
// Settings specific to WAP mobile content ads (AFMC) - deprecated.
type AdUnitMobileContentAdsSettings struct {
	MarkupLanguage    *string `json:"markupLanguage,omitempty"`
	ScriptingLanguage *string `json:"scriptingLanguage,omitempty"`
	Size              *string `json:"size,omitempty"`
	Type              *string `json:"type,omitempty"`
}

type AdUnit struct {
	Code                     *string                         `json:"code,omitempty"`
	ContentAdsSettings       *AdUnitContentAdsSettings       `json:"contentAdsSettings,omitempty"`
	CustomStyle              *AdStyle                        `json:"customStyle,omitempty"`
	FeedAdsSettings          *AdUnitFeedAdsSettings          `json:"feedAdsSettings,omitempty"`
	ID                       *string                         `json:"id,omitempty"`
	Kind                     *string                         `json:"kind,omitempty"`
	MobileContentAdsSettings *AdUnitMobileContentAdsSettings `json:"mobileContentAdsSettings,omitempty"`
	Name                     *string                         `json:"name,omitempty"`
	SavedStyleID             *string                         `json:"savedStyleId,omitempty"`
	Status                   *string                         `json:"status,omitempty"`
}

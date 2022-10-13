package shared

type AdUnitContentAdsSettingsBackupOption struct {
	Color *string `json:"color"`
	Type  *string `json:"type"`
	URL   *string `json:"url"`
}

type AdUnitContentAdsSettings struct {
	BackupOption *AdUnitContentAdsSettingsBackupOption `json:"backupOption"`
	Size         *string                               `json:"size"`
	Type         *string                               `json:"type"`
}

type AdUnitMobileContentAdsSettings struct {
	MarkupLanguage    *string `json:"markupLanguage"`
	ScriptingLanguage *string `json:"scriptingLanguage"`
	Size              *string `json:"size"`
	Type              *string `json:"type"`
}

type AdUnit struct {
	Code                     *string                         `json:"code"`
	ContentAdsSettings       *AdUnitContentAdsSettings       `json:"contentAdsSettings"`
	CustomStyle              *AdStyle                        `json:"customStyle"`
	ID                       *string                         `json:"id"`
	Kind                     *string                         `json:"kind"`
	MobileContentAdsSettings *AdUnitMobileContentAdsSettings `json:"mobileContentAdsSettings"`
	Name                     *string                         `json:"name"`
	Status                   *string                         `json:"status"`
}

package shared

type AppConfig struct {
	Classification map[string]Classification `json:"classification"`
	Display        *AppConfigDisplay         `json:"display"`
	General        *AppConfigGeneral         `json:"general"`
	I18n           *AppConfigI18n            `json:"i18n"`
	Linear         *AppConfigLinear          `json:"linear"`
	Navigation     *Navigation               `json:"navigation"`
	Playback       *AppConfigPlayback        `json:"playback"`
	Sitemap        []PageSummary             `json:"sitemap"`
	Subscription   *AppConfigSubscription    `json:"subscription"`
}

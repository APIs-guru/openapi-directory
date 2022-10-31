package shared



type AppConfig struct {
    Classification map[string]Classification `json:"classification,omitempty"`
    Display *AppConfigDisplay `json:"display,omitempty"`
    General *AppConfigGeneral `json:"general,omitempty"`
    I18n *AppConfigI18n `json:"i18n,omitempty"`
    Linear *AppConfigLinear `json:"linear,omitempty"`
    Navigation *Navigation `json:"navigation,omitempty"`
    Playback *AppConfigPlayback `json:"playback,omitempty"`
    Sitemap []PageSummary `json:"sitemap,omitempty"`
    Subscription *AppConfigSubscription `json:"subscription,omitempty"`
    
}


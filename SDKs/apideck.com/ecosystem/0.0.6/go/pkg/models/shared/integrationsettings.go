package shared



type IntegrationSettings struct {
    AlbacrossID *string `json:"albacross_id,omitempty"`
    AutomateEnabled *bool `json:"automate_enabled,omitempty"`
    BlendrEnabled *bool `json:"blendr_enabled,omitempty"`
    CombideskEnabled *bool `json:"combidesk_enabled,omitempty"`
    CrispID *string `json:"crisp_id,omitempty"`
    DriftID *string `json:"drift_id,omitempty"`
    GoogleAnalyticsID *string `json:"google_analytics_id,omitempty"`
    GoogleTagManagerID *string `json:"google_tag_manager_id,omitempty"`
    HeapID *string `json:"heap_id,omitempty"`
    HubspotPortalID *string `json:"hubspot_portal_id,omitempty"`
    IntegromatEnabled *bool `json:"integromat_enabled,omitempty"`
    IntercomAppID *string `json:"intercom_app_id,omitempty"`
    IubendaCookiePolicyID *string `json:"iubenda_cookie_policy_id,omitempty"`
    IubendaSiteID *string `json:"iubenda_site_id,omitempty"`
    JournyIoDomain *string `json:"journy_io_domain,omitempty"`
    JournyIoID *string `json:"journy_io_id,omitempty"`
    LivechatID *string `json:"livechat_id,omitempty"`
    MetomicID *string `json:"metomic_id,omitempty"`
    MicrosoftFlowEnabled *bool `json:"microsoft_flow_enabled,omitempty"`
    MicrosoftFlowID *string `json:"microsoft_flow_id,omitempty"`
    OnetrustID *string `json:"onetrust_id,omitempty"`
    PiesyncEnabled *bool `json:"piesync_enabled,omitempty"`
    SegmentEnabled *bool `json:"segment_enabled,omitempty"`
    SegmentID *string `json:"segment_id,omitempty"`
    TrayIoEnabled *bool `json:"tray_io_enabled,omitempty"`
    ZapierBetaLink *string `json:"zapier_beta_link,omitempty"`
    ZapierEnabled *bool `json:"zapier_enabled,omitempty"`
    ZapierID *string `json:"zapier_id,omitempty"`
    
}


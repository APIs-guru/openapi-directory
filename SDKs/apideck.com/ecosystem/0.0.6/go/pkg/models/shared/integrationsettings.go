package shared

type IntegrationSettings struct {
	AlbacrossID           *string `json:"albacross_id"`
	AutomateEnabled       *bool   `json:"automate_enabled"`
	BlendrEnabled         *bool   `json:"blendr_enabled"`
	CombideskEnabled      *bool   `json:"combidesk_enabled"`
	CrispID               *string `json:"crisp_id"`
	DriftID               *string `json:"drift_id"`
	GoogleAnalyticsID     *string `json:"google_analytics_id"`
	GoogleTagManagerID    *string `json:"google_tag_manager_id"`
	HeapID                *string `json:"heap_id"`
	HubspotPortalID       *string `json:"hubspot_portal_id"`
	IntegromatEnabled     *bool   `json:"integromat_enabled"`
	IntercomAppID         *string `json:"intercom_app_id"`
	IubendaCookiePolicyID *string `json:"iubenda_cookie_policy_id"`
	IubendaSiteID         *string `json:"iubenda_site_id"`
	JournyIoDomain        *string `json:"journy_io_domain"`
	JournyIoID            *string `json:"journy_io_id"`
	LivechatID            *string `json:"livechat_id"`
	MetomicID             *string `json:"metomic_id"`
	MicrosoftFlowEnabled  *bool   `json:"microsoft_flow_enabled"`
	MicrosoftFlowID       *string `json:"microsoft_flow_id"`
	OnetrustID            *string `json:"onetrust_id"`
	PiesyncEnabled        *bool   `json:"piesync_enabled"`
	SegmentEnabled        *bool   `json:"segment_enabled"`
	SegmentID             *string `json:"segment_id"`
	TrayIoEnabled         *bool   `json:"tray_io_enabled"`
	ZapierBetaLink        *string `json:"zapier_beta_link"`
	ZapierEnabled         *bool   `json:"zapier_enabled"`
	ZapierID              *string `json:"zapier_id"`
}

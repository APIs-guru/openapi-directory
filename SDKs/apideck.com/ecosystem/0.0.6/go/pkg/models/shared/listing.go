package shared

import (
	"time"
)

type Listing struct {
	AutomateID                *string       `json:"automate_id"`
	BlendrID                  *string       `json:"blendr_id"`
	CardBackgroundColor       *string       `json:"card_background_color"`
	CardBackgroundImage       *File         `json:"card_background_image"`
	Categories                []Category    `json:"categories"`
	CloudServiceID            *string       `json:"cloud_service_id"`
	Collections               []Collection  `json:"collections"`
	CombideskID               *string       `json:"combidesk_id"`
	CreatedAt                 *time.Time    `json:"created_at"`
	Description               *string       `json:"description"`
	DetailPageDisabled        *bool         `json:"detail_page_disabled"`
	ExternalID                *string       `json:"external_id"`
	Features                  *string       `json:"features"`
	ID                        *string       `json:"id"`
	IntegromatID              *string       `json:"integromat_id"`
	Logo                      *Logo         `json:"logo"`
	Media                     []Media       `json:"media"`
	MetaTagDescription        *string       `json:"meta_tag_description"`
	MetaTagKeywords           *string       `json:"meta_tag_keywords"`
	MetaTagTitle              *string       `json:"meta_tag_title"`
	MicrosoftFlowID           *string       `json:"microsoft_flow_id"`
	Name                      string        `json:"name"`
	NativeIntegration         *bool         `json:"native_integration"`
	NativeIntegrationLink     *string       `json:"native_integration_link"`
	Partner                   *Partner      `json:"partner"`
	PiesyncID                 *string       `json:"piesync_id"`
	Pricing                   *string       `json:"pricing"`
	Products                  []Product     `json:"products"`
	Published                 *bool         `json:"published"`
	PublishedAt               *time.Time    `json:"published_at"`
	Screenshots               []Screenshot  `json:"screenshots"`
	SegmentID                 *string       `json:"segment_id"`
	Slug                      string        `json:"slug"`
	Sticky                    *bool         `json:"sticky"`
	TagLine                   *string       `json:"tag_line"`
	ThirdPartyIntegration     *bool         `json:"third_party_integration"`
	ThirdPartyIntegrationLink *string       `json:"third_party_integration_link"`
	Translations              []Translation `json:"translations"`
	TrayIoID                  *string       `json:"tray_io_id"`
	UnifyConnectorID          *string       `json:"unify_connector_id"`
	Upcoming                  *bool         `json:"upcoming"`
	UpdatedAt                 *time.Time    `json:"updated_at"`
	ZapierID                  *string       `json:"zapier_id"`
}

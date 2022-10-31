package shared

import (
	"time"
)

type Listing struct {
	AutomateID                *string       `json:"automate_id,omitempty"`
	BlendrID                  *string       `json:"blendr_id,omitempty"`
	CardBackgroundColor       *string       `json:"card_background_color,omitempty"`
	CardBackgroundImage       *File         `json:"card_background_image,omitempty"`
	Categories                []Category    `json:"categories,omitempty"`
	CloudServiceID            *string       `json:"cloud_service_id,omitempty"`
	Collections               []Collection  `json:"collections,omitempty"`
	CombideskID               *string       `json:"combidesk_id,omitempty"`
	CreatedAt                 *time.Time    `json:"created_at,omitempty"`
	Description               *string       `json:"description,omitempty"`
	DetailPageDisabled        *bool         `json:"detail_page_disabled,omitempty"`
	ExternalID                *string       `json:"external_id,omitempty"`
	Features                  *string       `json:"features,omitempty"`
	ID                        *string       `json:"id,omitempty"`
	IntegromatID              *string       `json:"integromat_id,omitempty"`
	Logo                      *Logo         `json:"logo,omitempty"`
	Media                     []Media       `json:"media,omitempty"`
	MetaTagDescription        *string       `json:"meta_tag_description,omitempty"`
	MetaTagKeywords           *string       `json:"meta_tag_keywords,omitempty"`
	MetaTagTitle              *string       `json:"meta_tag_title,omitempty"`
	MicrosoftFlowID           *string       `json:"microsoft_flow_id,omitempty"`
	Name                      string        `json:"name"`
	NativeIntegration         *bool         `json:"native_integration,omitempty"`
	NativeIntegrationLink     *string       `json:"native_integration_link,omitempty"`
	Partner                   *Partner      `json:"partner,omitempty"`
	PiesyncID                 *string       `json:"piesync_id,omitempty"`
	Pricing                   *string       `json:"pricing,omitempty"`
	Products                  []Product     `json:"products,omitempty"`
	Published                 *bool         `json:"published,omitempty"`
	PublishedAt               *time.Time    `json:"published_at,omitempty"`
	Screenshots               []Screenshot  `json:"screenshots,omitempty"`
	SegmentID                 *string       `json:"segment_id,omitempty"`
	Slug                      string        `json:"slug"`
	Sticky                    *bool         `json:"sticky,omitempty"`
	TagLine                   *string       `json:"tag_line,omitempty"`
	ThirdPartyIntegration     *bool         `json:"third_party_integration,omitempty"`
	ThirdPartyIntegrationLink *string       `json:"third_party_integration_link,omitempty"`
	Translations              []Translation `json:"translations,omitempty"`
	TrayIoID                  *string       `json:"tray_io_id,omitempty"`
	UnifyConnectorID          *string       `json:"unify_connector_id,omitempty"`
	Upcoming                  *bool         `json:"upcoming,omitempty"`
	UpdatedAt                 *time.Time    `json:"updated_at,omitempty"`
	ZapierID                  *string       `json:"zapier_id,omitempty"`
}

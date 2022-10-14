package shared

import (
	"time"
)

type Opportunity struct {
	CloseDate          *time.Time    `json:"close_date,omitempty"`
	CompanyID          *string       `json:"company_id,omitempty"`
	CompanyName        *string       `json:"company_name,omitempty"`
	ContactID          *string       `json:"contact_id,omitempty"`
	CreatedAt          *time.Time    `json:"created_at,omitempty"`
	CreatedBy          *string       `json:"created_by,omitempty"`
	Currency           *CurrencyEnum `json:"currency,omitempty"`
	CustomFields       []CustomField `json:"custom_fields,omitempty"`
	DateLastContacted  *time.Time    `json:"date_last_contacted,omitempty"`
	DateLeadCreated    *time.Time    `json:"date_lead_created,omitempty"`
	DateStageChanged   *time.Time    `json:"date_stage_changed,omitempty"`
	Deleted            *bool         `json:"deleted,omitempty"`
	Description        *string       `json:"description,omitempty"`
	ExpectedRevenue    *float64      `json:"expected_revenue,omitempty"`
	ID                 *string       `json:"id,omitempty"`
	InteractionCount   *float64      `json:"interaction_count,omitempty"`
	LastActivityAt     *string       `json:"last_activity_at,omitempty"`
	LeadID             *string       `json:"lead_id,omitempty"`
	LeadSource         *string       `json:"lead_source,omitempty"`
	LossReason         *string       `json:"loss_reason,omitempty"`
	LossReasonID       *string       `json:"loss_reason_id,omitempty"`
	MonetaryAmount     *float64      `json:"monetary_amount,omitempty"`
	OwnerID            *string       `json:"owner_id,omitempty"`
	PipelineID         *string       `json:"pipeline_id,omitempty"`
	PipelineStageID    *string       `json:"pipeline_stage_id,omitempty"`
	PrimaryContactID   string        `json:"primary_contact_id"`
	Priority           *string       `json:"priority,omitempty"`
	SourceID           *string       `json:"source_id,omitempty"`
	StageLastChangedAt *time.Time    `json:"stage_last_changed_at,omitempty"`
	Status             *string       `json:"status,omitempty"`
	StatusID           *string       `json:"status_id,omitempty"`
	Tags               []string      `json:"tags,omitempty"`
	Title              string        `json:"title"`
	Type               *string       `json:"type,omitempty"`
	UpdatedAt          *time.Time    `json:"updated_at,omitempty"`
	UpdatedBy          *string       `json:"updated_by,omitempty"`
	WinProbability     *float64      `json:"win_probability,omitempty"`
	WonReason          *string       `json:"won_reason,omitempty"`
	WonReasonID        *string       `json:"won_reason_id,omitempty"`
}

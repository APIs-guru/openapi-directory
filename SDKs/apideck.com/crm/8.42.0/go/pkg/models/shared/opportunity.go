package shared

import (
	"time"
)

type Opportunity struct {
	CloseDate          *time.Time    `json:"close_date"`
	CompanyID          *string       `json:"company_id"`
	CompanyName        *string       `json:"company_name"`
	ContactID          *string       `json:"contact_id"`
	CreatedAt          *time.Time    `json:"created_at"`
	CreatedBy          *string       `json:"created_by"`
	Currency           *CurrencyEnum `json:"currency"`
	CustomFields       []CustomField `json:"custom_fields"`
	DateLastContacted  *time.Time    `json:"date_last_contacted"`
	DateLeadCreated    *time.Time    `json:"date_lead_created"`
	DateStageChanged   *time.Time    `json:"date_stage_changed"`
	Deleted            *bool         `json:"deleted"`
	Description        *string       `json:"description"`
	ExpectedRevenue    *float64      `json:"expected_revenue"`
	ID                 *string       `json:"id"`
	InteractionCount   *float64      `json:"interaction_count"`
	LastActivityAt     *string       `json:"last_activity_at"`
	LeadID             *string       `json:"lead_id"`
	LeadSource         *string       `json:"lead_source"`
	LossReason         *string       `json:"loss_reason"`
	LossReasonID       *string       `json:"loss_reason_id"`
	MonetaryAmount     *float64      `json:"monetary_amount"`
	OwnerID            *string       `json:"owner_id"`
	PipelineID         *string       `json:"pipeline_id"`
	PipelineStageID    *string       `json:"pipeline_stage_id"`
	PrimaryContactID   string        `json:"primary_contact_id"`
	Priority           *string       `json:"priority"`
	SourceID           *string       `json:"source_id"`
	StageLastChangedAt *time.Time    `json:"stage_last_changed_at"`
	Status             *string       `json:"status"`
	StatusID           *string       `json:"status_id"`
	Tags               []string      `json:"tags"`
	Title              string        `json:"title"`
	Type               *string       `json:"type"`
	UpdatedAt          *time.Time    `json:"updated_at"`
	UpdatedBy          *string       `json:"updated_by"`
	WinProbability     *float64      `json:"win_probability"`
	WonReason          *string       `json:"won_reason"`
	WonReasonID        *string       `json:"won_reason_id"`
}

package shared

type Note struct {
	Active        *bool   `json:"active,omitempty"`
	CompanyID     *string `json:"company_id,omitempty"`
	ContactID     *string `json:"contact_id,omitempty"`
	Content       *string `json:"content,omitempty"`
	CreatedAt     *string `json:"created_at,omitempty"`
	CreatedBy     *string `json:"created_by,omitempty"`
	ID            *string `json:"id,omitempty"`
	LeadID        *string `json:"lead_id,omitempty"`
	OpportunityID *string `json:"opportunity_id,omitempty"`
	OwnerID       *string `json:"owner_id,omitempty"`
	Title         *string `json:"title,omitempty"`
	UpdatedAt     *string `json:"updated_at,omitempty"`
	UpdatedBy     *string `json:"updated_by,omitempty"`
}

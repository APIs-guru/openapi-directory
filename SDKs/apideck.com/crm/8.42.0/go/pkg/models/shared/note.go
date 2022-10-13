package shared

type Note struct {
	Active        *bool   `json:"active"`
	CompanyID     *string `json:"company_id"`
	ContactID     *string `json:"contact_id"`
	Content       *string `json:"content"`
	CreatedAt     *string `json:"created_at"`
	CreatedBy     *string `json:"created_by"`
	ID            *string `json:"id"`
	LeadID        *string `json:"lead_id"`
	OpportunityID *string `json:"opportunity_id"`
	OwnerID       *string `json:"owner_id"`
	Title         *string `json:"title"`
	UpdatedAt     *string `json:"updated_at"`
	UpdatedBy     *string `json:"updated_by"`
}

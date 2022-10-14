package shared

type Charity struct {
	CharityID          *string `json:"charityId,omitempty"`
	DonationPercentage *string `json:"donationPercentage,omitempty"`
}

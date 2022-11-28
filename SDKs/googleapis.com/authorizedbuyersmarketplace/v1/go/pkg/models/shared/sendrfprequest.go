package shared

// SendRfpRequest
// Request to send an RFP. All fields in this request are proposed to publisher and subject to changes by publisher during later negotiation.
type SendRfpRequest struct {
	BuyerContacts               []Contact                    `json:"buyerContacts,omitempty"`
	Client                      *string                      `json:"client,omitempty"`
	DisplayName                 *string                      `json:"displayName,omitempty"`
	EstimatedGrossSpend         *Money                       `json:"estimatedGrossSpend,omitempty"`
	FlightEndTime               *string                      `json:"flightEndTime,omitempty"`
	FlightStartTime             *string                      `json:"flightStartTime,omitempty"`
	GeoTargeting                *CriteriaTargeting           `json:"geoTargeting,omitempty"`
	InventorySizeTargeting      *InventorySizeTargeting      `json:"inventorySizeTargeting,omitempty"`
	Note                        *string                      `json:"note,omitempty"`
	PreferredDealTerms          *PreferredDealTerms          `json:"preferredDealTerms,omitempty"`
	ProgrammaticGuaranteedTerms *ProgrammaticGuaranteedTerms `json:"programmaticGuaranteedTerms,omitempty"`
	PublisherProfile            *string                      `json:"publisherProfile,omitempty"`
}

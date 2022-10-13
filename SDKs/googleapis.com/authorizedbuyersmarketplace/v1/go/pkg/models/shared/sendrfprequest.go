package shared

type SendRfpRequest struct {
	BuyerContacts               []Contact                    `json:"buyerContacts"`
	Client                      *string                      `json:"client"`
	DisplayName                 *string                      `json:"displayName"`
	EstimatedGrossSpend         *Money                       `json:"estimatedGrossSpend"`
	FlightEndTime               *string                      `json:"flightEndTime"`
	FlightStartTime             *string                      `json:"flightStartTime"`
	GeoTargeting                *CriteriaTargeting           `json:"geoTargeting"`
	InventorySizeTargeting      *InventorySizeTargeting      `json:"inventorySizeTargeting"`
	Note                        *string                      `json:"note"`
	PreferredDealTerms          *PreferredDealTerms          `json:"preferredDealTerms"`
	ProgrammaticGuaranteedTerms *ProgrammaticGuaranteedTerms `json:"programmaticGuaranteedTerms"`
	PublisherProfile            *string                      `json:"publisherProfile"`
}

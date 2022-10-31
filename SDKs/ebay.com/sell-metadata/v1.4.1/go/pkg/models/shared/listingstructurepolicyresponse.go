package shared

type ListingStructurePolicyResponse struct {
	ListingStructurePolicies []ListingStructurePolicy `json:"listingStructurePolicies,omitempty"`
	Warnings                 []Error                  `json:"warnings,omitempty"`
}

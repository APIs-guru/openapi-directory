package shared

type ListingStructurePolicyResponse struct {
	ListingStructurePolicies []ListingStructurePolicy `json:"listingStructurePolicies"`
	Warnings                 []Error                  `json:"warnings"`
}

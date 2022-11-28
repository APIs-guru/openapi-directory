package shared

// Entity
// An entity contains data that describes your product, its supported features, and how it can be used or launched by your customer.
type Entity struct {
	Identifier *string `json:"Identifier,omitempty"`
	Type       string  `json:"Type"`
}

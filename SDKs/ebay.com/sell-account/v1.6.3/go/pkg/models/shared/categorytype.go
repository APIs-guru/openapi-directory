package shared

// CategoryType
// The category type discerns whether the policy covers the sale of motor vehicles (via eBay Motors), or the sale of everything except motor vehicles. Each business policy can be associated with either or both categories ('MOTORS_VEHICLES' and 'ALL_EXCLUDING_MOTORS_VEHICLES'); however,the 'MOTORS_VEHICLES' category type is not valid for return policies&ndash;return policies cannot be used with motor vehicle listings.
type CategoryType struct {
	Default *bool   `json:"default,omitempty"`
	Name    *string `json:"name,omitempty"`
}

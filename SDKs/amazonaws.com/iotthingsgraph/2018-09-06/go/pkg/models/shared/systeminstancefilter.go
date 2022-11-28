package shared

// SystemInstanceFilter
// An object that filters a system instance search. Multiple filters function as OR criteria in the search. For example a search that includes a GREENGRASS_GROUP_NAME and a STATUS filter searches for system instances in the specified Greengrass group that have the specified status.
type SystemInstanceFilter struct {
	Name  *SystemInstanceFilterNameEnum `json:"name,omitempty"`
	Value []string                      `json:"value,omitempty"`
}

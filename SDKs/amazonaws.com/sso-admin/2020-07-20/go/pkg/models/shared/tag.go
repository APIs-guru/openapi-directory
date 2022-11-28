package shared

// Tag
// A set of key-value pairs that are used to manage the resource. Tags can only be applied to permission sets and cannot be applied to corresponding roles that Amazon Web Services SSO creates in Amazon Web Services accounts.
type Tag struct {
	Key   *string `json:"Key,omitempty"`
	Value *string `json:"Value,omitempty"`
}

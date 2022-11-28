package shared

// AccountAttribute
// A name value pair that describes an aspect of an account.
type AccountAttribute struct {
	AttributeName   *string
	AttributeValues []AttributeValueTarget
}

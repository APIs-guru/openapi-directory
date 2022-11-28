package shared

// OptionVersion
// The version for an option. Option group option versions are returned by the <code>DescribeOptionGroupOptions</code> action.
type OptionVersion struct {
	IsDefault *bool
	Version   *string
}

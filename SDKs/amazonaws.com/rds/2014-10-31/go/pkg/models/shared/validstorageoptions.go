package shared

// ValidStorageOptions
// Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <code>DescribeValidDBInstanceModifications</code> action.
type ValidStorageOptions struct {
	IopsToStorageRatio         []DoubleRange
	ProvisionedIops            []Range
	StorageSize                []Range
	StorageType                *string
	SupportsStorageAutoscaling *bool
}

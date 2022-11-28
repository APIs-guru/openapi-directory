package shared

// ValidStorageOptions
// <p>Information about valid modifications that you can make to your DB instance.</p> <p>Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action.</p>
type ValidStorageOptions struct {
	IopsToStorageRatio []DoubleRange
	ProvisionedIops    []Range
	StorageSize        []Range
	StorageType        *string
}

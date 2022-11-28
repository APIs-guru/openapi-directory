package shared

// ResponsePartitionKey
// If <code>PartitionBy</code> was specified in a <code>DescribeDimensionKeys</code> request, the dimensions are returned in an array. Each element in the array specifies one dimension.
type ResponsePartitionKey struct {
	Dimensions map[string]string `json:"Dimensions"`
}

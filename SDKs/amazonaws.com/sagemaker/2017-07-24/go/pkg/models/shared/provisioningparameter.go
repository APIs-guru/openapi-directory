package shared

// ProvisioningParameter
// A key value pair used when you provision a project as a service catalog product. For information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service Catalog</a>.
type ProvisioningParameter struct {
	Key   *string `json:"Key,omitempty"`
	Value *string `json:"Value,omitempty"`
}

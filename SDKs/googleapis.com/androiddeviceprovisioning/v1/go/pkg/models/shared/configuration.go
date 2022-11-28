package shared

// ConfigurationInput
// A configuration collects the provisioning options for Android devices. Each configuration combines the following: * The EMM device policy controller (DPC) installed on the devices. * EMM policies enforced on the devices. * Metadata displayed on the device to help users during setup. Customers can add as many configurations as they need. However, zero-touch enrollment works best when a customer sets a default configuration that's applied to any new devices the organization purchases.
type ConfigurationInput struct {
	CompanyName       *string `json:"companyName,omitempty"`
	ConfigurationName *string `json:"configurationName,omitempty"`
	ContactEmail      *string `json:"contactEmail,omitempty"`
	ContactPhone      *string `json:"contactPhone,omitempty"`
	CustomMessage     *string `json:"customMessage,omitempty"`
	DpcExtras         *string `json:"dpcExtras,omitempty"`
	DpcResourcePath   *string `json:"dpcResourcePath,omitempty"`
	IsDefault         *bool   `json:"isDefault,omitempty"`
}

// Configuration
// A configuration collects the provisioning options for Android devices. Each configuration combines the following: * The EMM device policy controller (DPC) installed on the devices. * EMM policies enforced on the devices. * Metadata displayed on the device to help users during setup. Customers can add as many configurations as they need. However, zero-touch enrollment works best when a customer sets a default configuration that's applied to any new devices the organization purchases.
type Configuration struct {
	CompanyName       *string `json:"companyName,omitempty"`
	ConfigurationID   *string `json:"configurationId,omitempty"`
	ConfigurationName *string `json:"configurationName,omitempty"`
	ContactEmail      *string `json:"contactEmail,omitempty"`
	ContactPhone      *string `json:"contactPhone,omitempty"`
	CustomMessage     *string `json:"customMessage,omitempty"`
	DpcExtras         *string `json:"dpcExtras,omitempty"`
	DpcResourcePath   *string `json:"dpcResourcePath,omitempty"`
	IsDefault         *bool   `json:"isDefault,omitempty"`
	Name              *string `json:"name,omitempty"`
}

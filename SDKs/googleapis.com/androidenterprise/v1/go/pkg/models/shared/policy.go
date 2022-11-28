package shared

type PolicyAutoUpdatePolicyEnum string

const (
	PolicyAutoUpdatePolicyEnumAutoUpdatePolicyUnspecified PolicyAutoUpdatePolicyEnum = "autoUpdatePolicyUnspecified"
	PolicyAutoUpdatePolicyEnumChoiceToTheUser             PolicyAutoUpdatePolicyEnum = "choiceToTheUser"
	PolicyAutoUpdatePolicyEnumNever                       PolicyAutoUpdatePolicyEnum = "never"
	PolicyAutoUpdatePolicyEnumWifiOnly                    PolicyAutoUpdatePolicyEnum = "wifiOnly"
	PolicyAutoUpdatePolicyEnumAlways                      PolicyAutoUpdatePolicyEnum = "always"
)

type PolicyDeviceReportPolicyEnum string

const (
	PolicyDeviceReportPolicyEnumDeviceReportPolicyUnspecified PolicyDeviceReportPolicyEnum = "deviceReportPolicyUnspecified"
	PolicyDeviceReportPolicyEnumDeviceReportDisabled          PolicyDeviceReportPolicyEnum = "deviceReportDisabled"
	PolicyDeviceReportPolicyEnumDeviceReportEnabled           PolicyDeviceReportPolicyEnum = "deviceReportEnabled"
)

type PolicyProductAvailabilityPolicyEnum string

const (
	PolicyProductAvailabilityPolicyEnumProductAvailabilityPolicyUnspecified PolicyProductAvailabilityPolicyEnum = "productAvailabilityPolicyUnspecified"
	PolicyProductAvailabilityPolicyEnumWhitelist                            PolicyProductAvailabilityPolicyEnum = "whitelist"
	PolicyProductAvailabilityPolicyEnumAll                                  PolicyProductAvailabilityPolicyEnum = "all"
)

// Policy
// The device policy for a given managed device.
type Policy struct {
	AutoUpdatePolicy          *PolicyAutoUpdatePolicyEnum          `json:"autoUpdatePolicy,omitempty"`
	DeviceReportPolicy        *PolicyDeviceReportPolicyEnum        `json:"deviceReportPolicy,omitempty"`
	MaintenanceWindow         *MaintenanceWindow                   `json:"maintenanceWindow,omitempty"`
	ProductAvailabilityPolicy *PolicyProductAvailabilityPolicyEnum `json:"productAvailabilityPolicy,omitempty"`
	ProductPolicy             []ProductPolicy                      `json:"productPolicy,omitempty"`
}

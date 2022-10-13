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

type Policy struct {
	AutoUpdatePolicy          *PolicyAutoUpdatePolicyEnum          `json:"autoUpdatePolicy"`
	DeviceReportPolicy        *PolicyDeviceReportPolicyEnum        `json:"deviceReportPolicy"`
	MaintenanceWindow         *MaintenanceWindow                   `json:"maintenanceWindow"`
	ProductAvailabilityPolicy *PolicyProductAvailabilityPolicyEnum `json:"productAvailabilityPolicy"`
	ProductPolicy             []ProductPolicy                      `json:"productPolicy"`
}

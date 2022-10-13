package shared

type DeviceAppliedStateEnum string

const (
	DeviceAppliedStateEnumDeviceStateUnspecified DeviceAppliedStateEnum = "DEVICE_STATE_UNSPECIFIED"
	DeviceAppliedStateEnumActive                 DeviceAppliedStateEnum = "ACTIVE"
	DeviceAppliedStateEnumDisabled               DeviceAppliedStateEnum = "DISABLED"
	DeviceAppliedStateEnumDeleted                DeviceAppliedStateEnum = "DELETED"
	DeviceAppliedStateEnumProvisioning           DeviceAppliedStateEnum = "PROVISIONING"
)

type DeviceManagementModeEnum string

const (
	DeviceManagementModeEnumManagementModeUnspecified DeviceManagementModeEnum = "MANAGEMENT_MODE_UNSPECIFIED"
	DeviceManagementModeEnumDeviceOwner               DeviceManagementModeEnum = "DEVICE_OWNER"
	DeviceManagementModeEnumProfileOwner              DeviceManagementModeEnum = "PROFILE_OWNER"
)

type DeviceOwnershipEnum string

const (
	DeviceOwnershipEnumOwnershipUnspecified DeviceOwnershipEnum = "OWNERSHIP_UNSPECIFIED"
	DeviceOwnershipEnumCompanyOwned         DeviceOwnershipEnum = "COMPANY_OWNED"
	DeviceOwnershipEnumPersonallyOwned      DeviceOwnershipEnum = "PERSONALLY_OWNED"
)

type DeviceStateEnum string

const (
	DeviceStateEnumDeviceStateUnspecified DeviceStateEnum = "DEVICE_STATE_UNSPECIFIED"
	DeviceStateEnumActive                 DeviceStateEnum = "ACTIVE"
	DeviceStateEnumDisabled               DeviceStateEnum = "DISABLED"
	DeviceStateEnumDeleted                DeviceStateEnum = "DELETED"
	DeviceStateEnumProvisioning           DeviceStateEnum = "PROVISIONING"
)

type Device struct {
	APILevel                       *int32                    `json:"apiLevel"`
	ApplicationReports             []ApplicationReport       `json:"applicationReports"`
	AppliedPasswordPolicies        []PasswordRequirements    `json:"appliedPasswordPolicies"`
	AppliedPolicyName              *string                   `json:"appliedPolicyName"`
	AppliedPolicyVersion           *string                   `json:"appliedPolicyVersion"`
	AppliedState                   *DeviceAppliedStateEnum   `json:"appliedState"`
	CommonCriteriaModeInfo         *CommonCriteriaModeInfo   `json:"commonCriteriaModeInfo"`
	DeviceSettings                 *DeviceSettings           `json:"deviceSettings"`
	DisabledReason                 *UserFacingMessage        `json:"disabledReason"`
	Displays                       []Display                 `json:"displays"`
	EnrollmentTime                 *string                   `json:"enrollmentTime"`
	EnrollmentTokenData            *string                   `json:"enrollmentTokenData"`
	EnrollmentTokenName            *string                   `json:"enrollmentTokenName"`
	HardwareInfo                   *HardwareInfo             `json:"hardwareInfo"`
	HardwareStatusSamples          []HardwareStatus          `json:"hardwareStatusSamples"`
	LastPolicyComplianceReportTime *string                   `json:"lastPolicyComplianceReportTime"`
	LastPolicySyncTime             *string                   `json:"lastPolicySyncTime"`
	LastStatusReportTime           *string                   `json:"lastStatusReportTime"`
	ManagementMode                 *DeviceManagementModeEnum `json:"managementMode"`
	MemoryEvents                   []MemoryEvent             `json:"memoryEvents"`
	MemoryInfo                     *MemoryInfo               `json:"memoryInfo"`
	Name                           *string                   `json:"name"`
	NetworkInfo                    *NetworkInfo              `json:"networkInfo"`
	NonComplianceDetails           []NonComplianceDetail     `json:"nonComplianceDetails"`
	Ownership                      *DeviceOwnershipEnum      `json:"ownership"`
	PolicyCompliant                *bool                     `json:"policyCompliant"`
	PolicyName                     *string                   `json:"policyName"`
	PowerManagementEvents          []PowerManagementEvent    `json:"powerManagementEvents"`
	PreviousDeviceNames            []string                  `json:"previousDeviceNames"`
	SecurityPosture                *SecurityPosture          `json:"securityPosture"`
	SoftwareInfo                   *SoftwareInfo             `json:"softwareInfo"`
	State                          *DeviceStateEnum          `json:"state"`
	SystemProperties               map[string]string         `json:"systemProperties"`
	User                           *User                     `json:"user"`
	UserName                       *string                   `json:"userName"`
}

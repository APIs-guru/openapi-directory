package shared




type DeviceAppliedStateEnum string

const (
    DeviceAppliedStateEnumDeviceStateUnspecified DeviceAppliedStateEnum = "DEVICE_STATE_UNSPECIFIED"
DeviceAppliedStateEnumActive DeviceAppliedStateEnum = "ACTIVE"
DeviceAppliedStateEnumDisabled DeviceAppliedStateEnum = "DISABLED"
DeviceAppliedStateEnumDeleted DeviceAppliedStateEnum = "DELETED"
DeviceAppliedStateEnumProvisioning DeviceAppliedStateEnum = "PROVISIONING"
)



type DeviceManagementModeEnum string

const (
    DeviceManagementModeEnumManagementModeUnspecified DeviceManagementModeEnum = "MANAGEMENT_MODE_UNSPECIFIED"
DeviceManagementModeEnumDeviceOwner DeviceManagementModeEnum = "DEVICE_OWNER"
DeviceManagementModeEnumProfileOwner DeviceManagementModeEnum = "PROFILE_OWNER"
)



type DeviceOwnershipEnum string

const (
    DeviceOwnershipEnumOwnershipUnspecified DeviceOwnershipEnum = "OWNERSHIP_UNSPECIFIED"
DeviceOwnershipEnumCompanyOwned DeviceOwnershipEnum = "COMPANY_OWNED"
DeviceOwnershipEnumPersonallyOwned DeviceOwnershipEnum = "PERSONALLY_OWNED"
)



type DeviceStateEnum string

const (
    DeviceStateEnumDeviceStateUnspecified DeviceStateEnum = "DEVICE_STATE_UNSPECIFIED"
DeviceStateEnumActive DeviceStateEnum = "ACTIVE"
DeviceStateEnumDisabled DeviceStateEnum = "DISABLED"
DeviceStateEnumDeleted DeviceStateEnum = "DELETED"
DeviceStateEnumProvisioning DeviceStateEnum = "PROVISIONING"
)


type Device struct {
    APILevel *int32 `json:"apiLevel,omitempty"`
    ApplicationReports []ApplicationReport `json:"applicationReports,omitempty"`
    AppliedPasswordPolicies []PasswordRequirements `json:"appliedPasswordPolicies,omitempty"`
    AppliedPolicyName *string `json:"appliedPolicyName,omitempty"`
    AppliedPolicyVersion *string `json:"appliedPolicyVersion,omitempty"`
    AppliedState *DeviceAppliedStateEnum `json:"appliedState,omitempty"`
    CommonCriteriaModeInfo *CommonCriteriaModeInfo `json:"commonCriteriaModeInfo,omitempty"`
    DeviceSettings *DeviceSettings `json:"deviceSettings,omitempty"`
    DisabledReason *UserFacingMessage `json:"disabledReason,omitempty"`
    Displays []Display `json:"displays,omitempty"`
    EnrollmentTime *string `json:"enrollmentTime,omitempty"`
    EnrollmentTokenData *string `json:"enrollmentTokenData,omitempty"`
    EnrollmentTokenName *string `json:"enrollmentTokenName,omitempty"`
    HardwareInfo *HardwareInfo `json:"hardwareInfo,omitempty"`
    HardwareStatusSamples []HardwareStatus `json:"hardwareStatusSamples,omitempty"`
    LastPolicyComplianceReportTime *string `json:"lastPolicyComplianceReportTime,omitempty"`
    LastPolicySyncTime *string `json:"lastPolicySyncTime,omitempty"`
    LastStatusReportTime *string `json:"lastStatusReportTime,omitempty"`
    ManagementMode *DeviceManagementModeEnum `json:"managementMode,omitempty"`
    MemoryEvents []MemoryEvent `json:"memoryEvents,omitempty"`
    MemoryInfo *MemoryInfo `json:"memoryInfo,omitempty"`
    Name *string `json:"name,omitempty"`
    NetworkInfo *NetworkInfo `json:"networkInfo,omitempty"`
    NonComplianceDetails []NonComplianceDetail `json:"nonComplianceDetails,omitempty"`
    Ownership *DeviceOwnershipEnum `json:"ownership,omitempty"`
    PolicyCompliant *bool `json:"policyCompliant,omitempty"`
    PolicyName *string `json:"policyName,omitempty"`
    PowerManagementEvents []PowerManagementEvent `json:"powerManagementEvents,omitempty"`
    PreviousDeviceNames []string `json:"previousDeviceNames,omitempty"`
    SecurityPosture *SecurityPosture `json:"securityPosture,omitempty"`
    SoftwareInfo *SoftwareInfo `json:"softwareInfo,omitempty"`
    State *DeviceStateEnum `json:"state,omitempty"`
    SystemProperties map[string]string `json:"systemProperties,omitempty"`
    User *User `json:"user,omitempty"`
    UserName *string `json:"userName,omitempty"`
    
}


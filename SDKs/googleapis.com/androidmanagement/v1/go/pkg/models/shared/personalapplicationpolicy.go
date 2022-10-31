package shared




type PersonalApplicationPolicyInstallTypeEnum string

const (
    PersonalApplicationPolicyInstallTypeEnumInstallTypeUnspecified PersonalApplicationPolicyInstallTypeEnum = "INSTALL_TYPE_UNSPECIFIED"
PersonalApplicationPolicyInstallTypeEnumBlocked PersonalApplicationPolicyInstallTypeEnum = "BLOCKED"
PersonalApplicationPolicyInstallTypeEnumAvailable PersonalApplicationPolicyInstallTypeEnum = "AVAILABLE"
)


type PersonalApplicationPolicy struct {
    InstallType *PersonalApplicationPolicyInstallTypeEnum `json:"installType,omitempty"`
    PackageName *string `json:"packageName,omitempty"`
    
}


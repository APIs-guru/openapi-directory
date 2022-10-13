package shared

type SubmissionDataRequestAuthSecondFactorTypeEnum string

const (
	SubmissionDataRequestAuthSecondFactorTypeEnumNone        SubmissionDataRequestAuthSecondFactorTypeEnum = "none"
	SubmissionDataRequestAuthSecondFactorTypeEnumPhoneNumber SubmissionDataRequestAuthSecondFactorTypeEnum = "phone_number"
	SubmissionDataRequestAuthSecondFactorTypeEnumTotp        SubmissionDataRequestAuthSecondFactorTypeEnum = "totp"
	SubmissionDataRequestAuthSecondFactorTypeEnumMobilePush  SubmissionDataRequestAuthSecondFactorTypeEnum = "mobile_push"
	SubmissionDataRequestAuthSecondFactorTypeEnumSecurityKey SubmissionDataRequestAuthSecondFactorTypeEnum = "security_key"
	SubmissionDataRequestAuthSecondFactorTypeEnumFingerprint SubmissionDataRequestAuthSecondFactorTypeEnum = "fingerprint"
)

type SubmissionDataRequestAuthTypeEnum string

const (
	SubmissionDataRequestAuthTypeEnumNone        SubmissionDataRequestAuthTypeEnum = "none"
	SubmissionDataRequestAuthTypeEnumPassword    SubmissionDataRequestAuthTypeEnum = "password"
	SubmissionDataRequestAuthTypeEnumOauth       SubmissionDataRequestAuthTypeEnum = "oauth"
	SubmissionDataRequestAuthTypeEnumEmailLink   SubmissionDataRequestAuthTypeEnum = "email_link"
	SubmissionDataRequestAuthTypeEnumPhoneNumber SubmissionDataRequestAuthTypeEnum = "phone_number"
	SubmissionDataRequestAuthTypeEnumLdap        SubmissionDataRequestAuthTypeEnum = "ldap"
	SubmissionDataRequestAuthTypeEnumSaml        SubmissionDataRequestAuthTypeEnum = "saml"
)

type SubmissionDataRequestStateEnum string

const (
	SubmissionDataRequestStateEnumPending   SubmissionDataRequestStateEnum = "pending"
	SubmissionDataRequestStateEnumCompleted SubmissionDataRequestStateEnum = "completed"
)

type SubmissionDataRequest struct {
	AuthPhoneNumberHash  *string                                        `json:"auth_phone_number_hash"`
	AuthProvider         *string                                        `json:"auth_provider"`
	AuthSecondFactorType *SubmissionDataRequestAuthSecondFactorTypeEnum `json:"auth_second_factor_type"`
	AuthSessionIDHash    *string                                        `json:"auth_session_id_hash"`
	AuthSessionStartedAt *string                                        `json:"auth_session_started_at"`
	AuthType             *SubmissionDataRequestAuthTypeEnum             `json:"auth_type"`
	AuthUserIDHash       *string                                        `json:"auth_user_id_hash"`
	AuthUsernameHash     *string                                        `json:"auth_username_hash"`
	CompletedAt          *string                                        `json:"completed_at"`
	Email                string                                         `json:"email"`
	Fields               []string                                       `json:"fields"`
	ID                   string                                         `json:"id"`
	IPAddress            *string                                        `json:"ip_address"`
	Metadata             map[string]interface{}                         `json:"metadata"`
	Name                 string                                         `json:"name"`
	Order                int64                                          `json:"order"`
	SortOrder            int64                                          `json:"sort_order"`
	State                SubmissionDataRequestStateEnum                 `json:"state"`
	UserAgent            *string                                        `json:"user_agent"`
	ViewedAt             *string                                        `json:"viewed_at"`
}

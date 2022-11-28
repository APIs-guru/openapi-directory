package shared

// OptionSetting
// Option settings are the actual settings being applied or configured for that option. It is used when you modify an option group or describe option groups. For example, the NATIVE_NETWORK_ENCRYPTION option has a setting called SQLNET.ENCRYPTION_SERVER that can have several different values.
type OptionSetting struct {
	AllowedValues *string
	ApplyType     *string
	DataType      *string
	DefaultValue  *string
	Description   *string
	IsCollection  *bool
	IsModifiable  *bool
	Name          *string
	Value         *string
}

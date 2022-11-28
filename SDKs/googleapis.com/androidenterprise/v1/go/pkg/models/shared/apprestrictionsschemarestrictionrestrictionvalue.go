package shared

type AppRestrictionsSchemaRestrictionRestrictionValueTypeEnum string

const (
	AppRestrictionsSchemaRestrictionRestrictionValueTypeEnumBool        AppRestrictionsSchemaRestrictionRestrictionValueTypeEnum = "bool"
	AppRestrictionsSchemaRestrictionRestrictionValueTypeEnumString      AppRestrictionsSchemaRestrictionRestrictionValueTypeEnum = "string"
	AppRestrictionsSchemaRestrictionRestrictionValueTypeEnumInteger     AppRestrictionsSchemaRestrictionRestrictionValueTypeEnum = "integer"
	AppRestrictionsSchemaRestrictionRestrictionValueTypeEnumChoice      AppRestrictionsSchemaRestrictionRestrictionValueTypeEnum = "choice"
	AppRestrictionsSchemaRestrictionRestrictionValueTypeEnumMultiselect AppRestrictionsSchemaRestrictionRestrictionValueTypeEnum = "multiselect"
	AppRestrictionsSchemaRestrictionRestrictionValueTypeEnumHidden      AppRestrictionsSchemaRestrictionRestrictionValueTypeEnum = "hidden"
	AppRestrictionsSchemaRestrictionRestrictionValueTypeEnumBundle      AppRestrictionsSchemaRestrictionRestrictionValueTypeEnum = "bundle"
	AppRestrictionsSchemaRestrictionRestrictionValueTypeEnumBundleArray AppRestrictionsSchemaRestrictionRestrictionValueTypeEnum = "bundleArray"
)

// AppRestrictionsSchemaRestrictionRestrictionValue
// A typed value for the restriction.
type AppRestrictionsSchemaRestrictionRestrictionValue struct {
	Type             *AppRestrictionsSchemaRestrictionRestrictionValueTypeEnum `json:"type,omitempty"`
	ValueBool        *bool                                                     `json:"valueBool,omitempty"`
	ValueInteger     *int32                                                    `json:"valueInteger,omitempty"`
	ValueMultiselect []string                                                  `json:"valueMultiselect,omitempty"`
	ValueString      *string                                                   `json:"valueString,omitempty"`
}

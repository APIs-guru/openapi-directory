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

type AppRestrictionsSchemaRestrictionRestrictionValue struct {
	Type             *AppRestrictionsSchemaRestrictionRestrictionValueTypeEnum `json:"type"`
	ValueBool        *bool                                                     `json:"valueBool"`
	ValueInteger     *int32                                                    `json:"valueInteger"`
	ValueMultiselect []string                                                  `json:"valueMultiselect"`
	ValueString      *string                                                   `json:"valueString"`
}

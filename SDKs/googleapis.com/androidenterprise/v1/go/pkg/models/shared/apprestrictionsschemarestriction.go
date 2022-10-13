package shared

type AppRestrictionsSchemaRestrictionRestrictionTypeEnum string

const (
	AppRestrictionsSchemaRestrictionRestrictionTypeEnumBool        AppRestrictionsSchemaRestrictionRestrictionTypeEnum = "bool"
	AppRestrictionsSchemaRestrictionRestrictionTypeEnumString      AppRestrictionsSchemaRestrictionRestrictionTypeEnum = "string"
	AppRestrictionsSchemaRestrictionRestrictionTypeEnumInteger     AppRestrictionsSchemaRestrictionRestrictionTypeEnum = "integer"
	AppRestrictionsSchemaRestrictionRestrictionTypeEnumChoice      AppRestrictionsSchemaRestrictionRestrictionTypeEnum = "choice"
	AppRestrictionsSchemaRestrictionRestrictionTypeEnumMultiselect AppRestrictionsSchemaRestrictionRestrictionTypeEnum = "multiselect"
	AppRestrictionsSchemaRestrictionRestrictionTypeEnumHidden      AppRestrictionsSchemaRestrictionRestrictionTypeEnum = "hidden"
	AppRestrictionsSchemaRestrictionRestrictionTypeEnumBundle      AppRestrictionsSchemaRestrictionRestrictionTypeEnum = "bundle"
	AppRestrictionsSchemaRestrictionRestrictionTypeEnumBundleArray AppRestrictionsSchemaRestrictionRestrictionTypeEnum = "bundleArray"
)

type AppRestrictionsSchemaRestriction struct {
	DefaultValue      *AppRestrictionsSchemaRestrictionRestrictionValue    `json:"defaultValue"`
	Description       *string                                              `json:"description"`
	Entry             []string                                             `json:"entry"`
	EntryValue        []string                                             `json:"entryValue"`
	Key               *string                                              `json:"key"`
	NestedRestriction []AppRestrictionsSchemaRestriction                   `json:"nestedRestriction"`
	RestrictionType   *AppRestrictionsSchemaRestrictionRestrictionTypeEnum `json:"restrictionType"`
	Title             *string                                              `json:"title"`
}

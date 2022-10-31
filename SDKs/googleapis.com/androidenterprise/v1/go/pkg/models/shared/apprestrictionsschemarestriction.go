package shared




type AppRestrictionsSchemaRestrictionRestrictionTypeEnum string

const (
    AppRestrictionsSchemaRestrictionRestrictionTypeEnumBool AppRestrictionsSchemaRestrictionRestrictionTypeEnum = "bool"
AppRestrictionsSchemaRestrictionRestrictionTypeEnumString AppRestrictionsSchemaRestrictionRestrictionTypeEnum = "string"
AppRestrictionsSchemaRestrictionRestrictionTypeEnumInteger AppRestrictionsSchemaRestrictionRestrictionTypeEnum = "integer"
AppRestrictionsSchemaRestrictionRestrictionTypeEnumChoice AppRestrictionsSchemaRestrictionRestrictionTypeEnum = "choice"
AppRestrictionsSchemaRestrictionRestrictionTypeEnumMultiselect AppRestrictionsSchemaRestrictionRestrictionTypeEnum = "multiselect"
AppRestrictionsSchemaRestrictionRestrictionTypeEnumHidden AppRestrictionsSchemaRestrictionRestrictionTypeEnum = "hidden"
AppRestrictionsSchemaRestrictionRestrictionTypeEnumBundle AppRestrictionsSchemaRestrictionRestrictionTypeEnum = "bundle"
AppRestrictionsSchemaRestrictionRestrictionTypeEnumBundleArray AppRestrictionsSchemaRestrictionRestrictionTypeEnum = "bundleArray"
)


type AppRestrictionsSchemaRestriction struct {
    DefaultValue *AppRestrictionsSchemaRestrictionRestrictionValue `json:"defaultValue,omitempty"`
    Description *string `json:"description,omitempty"`
    Entry []string `json:"entry,omitempty"`
    EntryValue []string `json:"entryValue,omitempty"`
    Key *string `json:"key,omitempty"`
    NestedRestriction []AppRestrictionsSchemaRestriction `json:"nestedRestriction,omitempty"`
    RestrictionType *AppRestrictionsSchemaRestrictionRestrictionTypeEnum `json:"restrictionType,omitempty"`
    Title *string `json:"title,omitempty"`
    
}


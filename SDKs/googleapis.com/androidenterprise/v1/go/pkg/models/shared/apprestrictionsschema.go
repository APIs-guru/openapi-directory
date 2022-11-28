package shared

// AppRestrictionsSchema
// Represents the list of app restrictions available to be pre-configured for the product.
type AppRestrictionsSchema struct {
	Kind         *string                            `json:"kind,omitempty"`
	Restrictions []AppRestrictionsSchemaRestriction `json:"restrictions,omitempty"`
}

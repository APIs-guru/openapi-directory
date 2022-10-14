package shared

type AppRestrictionsSchema struct {
	Kind         *string                            `json:"kind,omitempty"`
	Restrictions []AppRestrictionsSchemaRestriction `json:"restrictions,omitempty"`
}

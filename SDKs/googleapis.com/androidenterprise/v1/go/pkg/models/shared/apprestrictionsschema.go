package shared

type AppRestrictionsSchema struct {
	Kind         *string                            `json:"kind"`
	Restrictions []AppRestrictionsSchemaRestriction `json:"restrictions"`
}

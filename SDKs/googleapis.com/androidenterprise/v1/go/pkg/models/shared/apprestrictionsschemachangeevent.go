package shared

// AppRestrictionsSchemaChangeEvent
// An event generated when a new app version is uploaded to Google Play and its app restrictions schema changed. To fetch the app restrictions schema for an app, use Products.getAppRestrictionsSchema on the EMM API.
type AppRestrictionsSchemaChangeEvent struct {
	ProductID *string `json:"productId,omitempty"`
}

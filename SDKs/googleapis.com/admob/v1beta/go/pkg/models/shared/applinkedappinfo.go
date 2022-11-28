package shared

// AppLinkedAppInfo
// Information from the app store if the app is linked to an app store.
type AppLinkedAppInfo struct {
	AppStoreID  *string `json:"appStoreId,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
}

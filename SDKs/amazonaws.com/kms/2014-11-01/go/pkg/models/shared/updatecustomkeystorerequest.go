package shared

type UpdateCustomKeyStoreRequest struct {
	CloudHsmClusterID     *string `json:"CloudHsmClusterId"`
	CustomKeyStoreID      string  `json:"CustomKeyStoreId"`
	KeyStorePassword      *string `json:"KeyStorePassword"`
	NewCustomKeyStoreName *string `json:"NewCustomKeyStoreName"`
}

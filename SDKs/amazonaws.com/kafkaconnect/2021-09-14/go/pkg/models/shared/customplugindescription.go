package shared

type CustomPluginDescription struct {
	CustomPluginArn *string `json:"customPluginArn"`
	Revision        *int64  `json:"revision"`
}

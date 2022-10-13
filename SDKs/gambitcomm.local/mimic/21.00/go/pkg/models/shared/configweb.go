package shared

type ConfigWeb struct {
	IsPersistentConnections *int32  `json:"is_persistent_connections"`
	Password                *string `json:"password"`
	Port                    *int32  `json:"port"`
	Rule                    *string `json:"rule"`
	Username                *string `json:"username"`
	Wsdl                    *string `json:"wsdl"`
}

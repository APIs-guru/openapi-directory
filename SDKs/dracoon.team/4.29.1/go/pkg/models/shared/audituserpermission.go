package shared

type AuditUserPermission struct {
	Permissions   NodePermissions `json:"permissions"`
	UserFirstName string          `json:"userFirstName"`
	UserID        int64           `json:"userId"`
	UserLastName  string          `json:"userLastName"`
	UserLogin     string          `json:"userLogin"`
}

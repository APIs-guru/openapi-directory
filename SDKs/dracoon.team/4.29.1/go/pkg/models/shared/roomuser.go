package shared

// RoomUserOutput
// User information
type RoomUserOutput struct {
	DisplayName        string                    `json:"displayName"`
	Email              string                    `json:"email"`
	ID                 int64                     `json:"id"`
	IsGranted          bool                      `json:"isGranted"`
	Login              string                    `json:"login"`
	Permissions        *NodePermissions          `json:"permissions,omitempty"`
	PublicKeyContainer *PublicKeyContainerOutput `json:"publicKeyContainer,omitempty"`
	UserInfo           UserInfo                  `json:"userInfo"`
}

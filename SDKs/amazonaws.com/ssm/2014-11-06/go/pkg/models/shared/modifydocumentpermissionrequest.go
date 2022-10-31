package shared

type ModifyDocumentPermissionRequest struct {
	AccountIdsToAdd       []string                   `json:"AccountIdsToAdd,omitempty"`
	AccountIdsToRemove    []string                   `json:"AccountIdsToRemove,omitempty"`
	Name                  string                     `json:"Name"`
	PermissionType        DocumentPermissionTypeEnum `json:"PermissionType"`
	SharedDocumentVersion *string                    `json:"SharedDocumentVersion,omitempty"`
}

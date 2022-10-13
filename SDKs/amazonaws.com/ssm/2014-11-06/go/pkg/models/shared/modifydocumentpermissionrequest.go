package shared

type ModifyDocumentPermissionRequest struct {
	AccountIdsToAdd       []string                   `json:"AccountIdsToAdd"`
	AccountIdsToRemove    []string                   `json:"AccountIdsToRemove"`
	Name                  string                     `json:"Name"`
	PermissionType        DocumentPermissionTypeEnum `json:"PermissionType"`
	SharedDocumentVersion *string                    `json:"SharedDocumentVersion"`
}

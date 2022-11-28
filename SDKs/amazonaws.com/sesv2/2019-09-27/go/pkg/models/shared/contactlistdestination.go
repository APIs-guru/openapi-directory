package shared

// ContactListDestination
// An object that contains details about the action of a contact list.
type ContactListDestination struct {
	ContactListImportAction ContactListImportActionEnum `json:"ContactListImportAction"`
	ContactListName         string                      `json:"ContactListName"`
}

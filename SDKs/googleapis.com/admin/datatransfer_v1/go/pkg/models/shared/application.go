package shared

// Application
// Application resources represent applications installed on the domain that support transferring ownership of user data.
type Application struct {
	Etag           *string                    `json:"etag,omitempty"`
	ID             *string                    `json:"id,omitempty"`
	Kind           *string                    `json:"kind,omitempty"`
	Name           *string                    `json:"name,omitempty"`
	TransferParams []ApplicationTransferParam `json:"transferParams,omitempty"`
}

package shared

type Application struct {
	Etag           *string                    `json:"etag"`
	ID             *string                    `json:"id"`
	Kind           *string                    `json:"kind"`
	Name           *string                    `json:"name"`
	TransferParams []ApplicationTransferParam `json:"transferParams"`
}

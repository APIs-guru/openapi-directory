package shared

type Pagination struct {
	Authorization *PaginationAuth    `json:"authorization"`
	Next          *string            `json:"next"`
	Options       *PaginationOptions `json:"options"`
	Page          int32              `json:"page"`
	Previous      *string            `json:"previous"`
	Size          *int32             `json:"size"`
	Total         int32              `json:"total"`
}

package shared

type Pagination struct {
	CurrentPage      *int64           `json:"currentPage,omitempty"`
	CurrentPageItems *int64           `json:"currentPageItems,omitempty"`
	ItemsTotal       *int64           `json:"itemsTotal,omitempty"`
	Links            []PaginationLink `json:"links"`
	PageSize         *int64           `json:"pageSize,omitempty"`
	PagesTotal       *int64           `json:"pagesTotal,omitempty"`
}

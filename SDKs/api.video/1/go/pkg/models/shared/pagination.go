package shared

type Pagination struct {
	CurrentPage      *int64           `json:"currentPage"`
	CurrentPageItems *int64           `json:"currentPageItems"`
	ItemsTotal       *int64           `json:"itemsTotal"`
	Links            []PaginationLink `json:"links"`
	PageSize         *int64           `json:"pageSize"`
	PagesTotal       *int64           `json:"pagesTotal"`
}

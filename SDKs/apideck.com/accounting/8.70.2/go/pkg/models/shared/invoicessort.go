package shared




type InvoicesSortByEnum string

const (
    InvoicesSortByEnumUpdatedAt InvoicesSortByEnum = "updated_at"
)


type InvoicesSort struct {
    By *InvoicesSortByEnum `queryParam:"name=by"`
    Direction *SortDirectionEnum `queryParam:"name=direction"`
    
}


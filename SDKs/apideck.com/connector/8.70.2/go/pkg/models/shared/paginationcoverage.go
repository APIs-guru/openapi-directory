package shared




type PaginationCoverageModeEnum string

const (
    PaginationCoverageModeEnumNative PaginationCoverageModeEnum = "native"
PaginationCoverageModeEnumVirtual PaginationCoverageModeEnum = "virtual"
)


type PaginationCoverage struct {
    LimitSupport *bool `json:"limit_support,omitempty"`
    Mode *PaginationCoverageModeEnum `json:"mode,omitempty"`
    PagingSupport *bool `json:"paging_support,omitempty"`
    
}


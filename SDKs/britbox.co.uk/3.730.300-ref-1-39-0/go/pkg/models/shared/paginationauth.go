package shared

type PaginationAuthScopeEnum string

const (
	PaginationAuthScopeEnumCatalog  PaginationAuthScopeEnum = "Catalog"
	PaginationAuthScopeEnumCommerce PaginationAuthScopeEnum = "Commerce"
	PaginationAuthScopeEnumSettings PaginationAuthScopeEnum = "Settings"
)

type PaginationAuthTypeEnum string

const (
	PaginationAuthTypeEnumUserAccount PaginationAuthTypeEnum = "UserAccount"
	PaginationAuthTypeEnumUserProfile PaginationAuthTypeEnum = "UserProfile"
)

type PaginationAuth struct {
	Scope PaginationAuthScopeEnum `json:"scope"`
	Type  PaginationAuthTypeEnum  `json:"type"`
}

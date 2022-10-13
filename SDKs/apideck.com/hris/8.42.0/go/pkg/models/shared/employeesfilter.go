package shared

type EmployeesFilter struct {
	CompanyID *string `queryParam:"name=company_id"`
}

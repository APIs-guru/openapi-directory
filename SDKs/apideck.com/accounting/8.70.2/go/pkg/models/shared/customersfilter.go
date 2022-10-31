package shared

type CustomersFilter struct {
	CompanyName *string `queryParam:"name=company_name"`
	DisplayName *string `queryParam:"name=display_name"`
	Email       *string `queryParam:"name=email"`
	FirstName   *string `queryParam:"name=first_name"`
	LastName    *string `queryParam:"name=last_name"`
}

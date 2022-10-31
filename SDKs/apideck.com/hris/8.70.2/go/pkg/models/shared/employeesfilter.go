package shared




type EmployeesFilterEmploymentStatusEnum string

const (
    EmployeesFilterEmploymentStatusEnumActive EmployeesFilterEmploymentStatusEnum = "active"
EmployeesFilterEmploymentStatusEnumInactive EmployeesFilterEmploymentStatusEnum = "inactive"
EmployeesFilterEmploymentStatusEnumTerminated EmployeesFilterEmploymentStatusEnum = "terminated"
EmployeesFilterEmploymentStatusEnumOther EmployeesFilterEmploymentStatusEnum = "other"
)


type EmployeesFilter struct {
    CompanyID *string `queryParam:"name=company_id"`
    Email *string `queryParam:"name=email"`
    EmployeeNumber *string `queryParam:"name=employee_number"`
    EmploymentStatus *EmployeesFilterEmploymentStatusEnum `queryParam:"name=employment_status"`
    FirstName *string `queryParam:"name=first_name"`
    LastName *string `queryParam:"name=last_name"`
    ManagerID *string `queryParam:"name=manager_id"`
    Title *string `queryParam:"name=title"`
    
}


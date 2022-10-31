package operations

import (
"time")

type SearchBoulderEmployeeSalariesQueryParams struct {
    ChangedateFrom *time.Time `queryParam:"style=form,explode=true,name=changedate.from"`
    ChangedateTo *time.Time `queryParam:"style=form,explode=true,name=changedate.to"`
    CreatedateFrom *time.Time `queryParam:"style=form,explode=true,name=createdate.from"`
    CreatedateTo *time.Time `queryParam:"style=form,explode=true,name=createdate.to"`
    Description *string `queryParam:"style=form,explode=true,name=description"`
    Filesuffix *string `queryParam:"style=form,explode=true,name=filesuffix"`
    Fromdate *time.Time `queryParam:"style=form,explode=true,name=fromdate"`
    Group *string `queryParam:"style=form,explode=true,name=group"`
    Max *int64 `queryParam:"style=form,explode=true,name=max"`
    Maxlatitude *float32 `queryParam:"style=form,explode=true,name=maxlatitude"`
    Maxlongitude *float32 `queryParam:"style=form,explode=true,name=maxlongitude"`
    Minlatitude *float32 `queryParam:"style=form,explode=true,name=minlatitude"`
    Minlongitude *float32 `queryParam:"style=form,explode=true,name=minlongitude"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    SearchDbBoulderEmployeeSalariesDepartment *string `queryParam:"style=form,explode=true,name=search.db_boulder_employee_salaries.department"`
    SearchDbBoulderEmployeeSalariesEmployeeAnnualBaseSalary *float64 `queryParam:"style=form,explode=true,name=search.db_boulder_employee_salaries.employee_annual_base_salary"`
    SearchDbBoulderEmployeeSalariesEmployeeFlsaExemptYN *string `queryParam:"style=form,explode=true,name=search.db_boulder_employee_salaries.employee_flsa_exempt_y_n"`
    SearchDbBoulderEmployeeSalariesEmployeeFteInThisPosition *float64 `queryParam:"style=form,explode=true,name=search.db_boulder_employee_salaries.employee_fte_in_this_position"`
    SearchDbBoulderEmployeeSalariesEmployeeHourlyPayRate *float64 `queryParam:"style=form,explode=true,name=search.db_boulder_employee_salaries.employee_hourly_pay_rate"`
    SearchDbBoulderEmployeeSalariesPayRangeMax *float64 `queryParam:"style=form,explode=true,name=search.db_boulder_employee_salaries.pay_range_max"`
    SearchDbBoulderEmployeeSalariesPayRangeMin *float64 `queryParam:"style=form,explode=true,name=search.db_boulder_employee_salaries.pay_range_min"`
    SearchDbBoulderEmployeeSalariesPositionDescription *string `queryParam:"style=form,explode=true,name=search.db_boulder_employee_salaries.position_description"`
    Skip *int64 `queryParam:"style=form,explode=true,name=skip"`
    Text *string `queryParam:"style=form,explode=true,name=text"`
    Todate *time.Time `queryParam:"style=form,explode=true,name=todate"`
    
}

type SearchBoulderEmployeeSalariesRequest struct {
    QueryParams SearchBoulderEmployeeSalariesQueryParams 
    
}

type SearchBoulderEmployeeSalariesResponse struct {
    ContentType string 
    StatusCode int64 
    
}


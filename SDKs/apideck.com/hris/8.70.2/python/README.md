# openapi

<!-- Start SDK Installation -->
## SDK Installation
```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CompaniesAddRequest(
    security=operations.CompaniesAddSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.CompaniesAddQueryParams(
        raw=True,
    ),
    headers=operations.CompaniesAddHeaders(
        x_apideck_app_id="officia",
        x_apideck_consumer_id="repellat",
        x_apideck_service_id="et",
    ),
    request=shared.HrisCompanyInput(
        addresses=[
            shared.Address(
                city="est",
                contact_name="et",
                country="sit",
                county="architecto",
                email="consequatur",
                fax="quo",
                id="deleniti",
                latitude="perferendis",
                line1="nemo",
                line2="vitae",
                line3="ad",
                line4="commodi",
                longitude="aspernatur",
                name="sit",
                phone_number="et",
                postal_code="iure",
                row_version="facilis",
                salutation="consequuntur",
                state="sit",
                street_number="aliquid",
                string="consequuntur",
                type="secondary",
                website="officiis",
            ),
            shared.Address(
                city="corporis",
                contact_name="et",
                country="necessitatibus",
                county="numquam",
                email="in",
                fax="animi",
                id="consequuntur",
                latitude="impedit",
                line1="cumque",
                line2="eos",
                line3="ut",
                line4="beatae",
                longitude="voluptatum",
                name="temporibus",
                phone_number="voluptas",
                postal_code="accusantium",
                row_version="officiis",
                salutation="aut",
                state="rerum",
                street_number="quasi",
                string="quo",
                type="billing",
                website="veniam",
            ),
            shared.Address(
                city="voluptatem",
                contact_name="facere",
                country="rerum",
                county="ea",
                email="cupiditate",
                fax="blanditiis",
                id="sed",
                latitude="tempora",
                line1="neque",
                line2="commodi",
                line3="optio",
                line4="praesentium",
                longitude="ipsa",
                name="iusto",
                phone_number="pariatur",
                postal_code="vel",
                row_version="et",
                salutation="doloremque",
                state="animi",
                street_number="doloremque",
                string="deserunt",
                type="home",
                website="corporis",
            ),
        ],
        company_number="nostrum",
        debtor_id="qui",
        display_name="praesentium",
        emails=[
            shared.Email(
                email="consequatur",
                id="rerum",
                type="personal",
            ),
        ],
        legal_name="consequatur",
        phone_numbers=[
            shared.PhoneNumber(
                area_code="facere",
                country_code="perspiciatis",
                extension="ut",
                id="facilis",
                number="beatae",
                type="mobile",
            ),
            shared.PhoneNumber(
                area_code="at",
                country_code="sint",
                extension="accusamus",
                id="saepe",
                number="nihil",
                type="primary",
            ),
        ],
        status="inactive",
        subdomain="porro",
        websites=[
            shared.Website(
                id="maxime",
                type="personal",
                url="est",
            ),
        ],
    ),
)
    
res = s.companies_add(req)

if res.create_hris_company_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `companiesAdd` - Create Company
* `companiesAll` - List Companies
* `companiesDelete` - Delete Company
* `companiesOne` - Get Company
* `companiesUpdate` - Update Company
* `departmentsAdd` - Create Department
* `departmentsAll` - List Departments
* `departmentsDelete` - Delete Department
* `departmentsOne` - Get Department
* `departmentsUpdate` - Update Department
* `employeePayrollsAll` - List Employee Payrolls
* `employeePayrollsOne` - Get Employee Payroll
* `employeeSchedulesAll` - List Employee Schedules
* `employeesAdd` - Create Employee
* `employeesAll` - List Employees
* `employeesDelete` - Delete Employee
* `employeesOne` - Get Employee
* `employeesUpdate` - Update Employee
* `jobsAll` - List Jobs
* `jobsOne` - One Job
* `payrollsAll` - List Payroll
* `payrollsOne` - Get Payroll
* `timeOffRequestsAdd` - Create Time Off Request
* `timeOffRequestsAll` - List Time Off Requests
* `timeOffRequestsDelete` - Delete Time Off Request
* `timeOffRequestsOne` - Get Time Off Request
* `timeOffRequestsUpdate` - Update Time Off Request

<!-- End SDK Available Operations -->
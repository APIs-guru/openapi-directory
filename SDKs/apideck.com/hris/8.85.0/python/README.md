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
        raw=False,
    ),
    headers=operations.CompaniesAddHeaders(
        x_apideck_app_id="aut",
        x_apideck_consumer_id="voluptatum",
        x_apideck_service_id="enim",
    ),
    request=shared.HrisCompanyInput(
        addresses=[
            shared.Address(
                city="adipisci",
                contact_name="eos",
                country="est",
                county="nesciunt",
                email="ipsum",
                fax="magni",
                id="exercitationem",
                latitude="voluptatem",
                line1="debitis",
                line2="non",
                line3="aut",
                line4="dicta",
                longitude="qui",
                name="architecto",
                phone_number="dolore",
                postal_code="laborum",
                row_version="laborum",
                salutation="perferendis",
                state="vero",
                street_number="ex",
                string="qui",
                type="home",
                website="debitis",
            ),
            shared.Address(
                city="qui",
                contact_name="culpa",
                country="ea",
                county="totam",
                email="non",
                fax="iste",
                id="inventore",
                latitude="repudiandae",
                line1="beatae",
                line2="dolorem",
                line3="voluptas",
                line4="dolores",
                longitude="quam",
                name="modi",
                phone_number="cupiditate",
                postal_code="perferendis",
                row_version="earum",
                salutation="asperiores",
                state="illo",
                street_number="odit",
                string="distinctio",
                type="secondary",
                website="dolore",
            ),
            shared.Address(
                city="corporis",
                contact_name="doloribus",
                country="ut",
                county="officiis",
                email="explicabo",
                fax="eum",
                id="et",
                latitude="neque",
                line1="autem",
                line2="optio",
                line3="et",
                line4="blanditiis",
                longitude="architecto",
                name="natus",
                phone_number="sint",
                postal_code="officia",
                row_version="repellat",
                salutation="et",
                state="accusamus",
                street_number="est",
                string="et",
                type="billing",
                website="architecto",
            ),
        ],
        company_number="consequatur",
        debtor_id="quo",
        display_name="deleniti",
        emails=[
            shared.Email(
                email="nemo",
                id="vitae",
                type="work",
            ),
            shared.Email(
                email="commodi",
                id="aspernatur",
                type="primary",
            ),
        ],
        legal_name="et",
        phone_numbers=[
            shared.PhoneNumber(
                area_code="facilis",
                country_code="consequuntur",
                extension="sit",
                id="aliquid",
                number="consequuntur",
                type="direct-dial-in",
            ),
        ],
        status="inactive",
        subdomain="corporis",
        websites=[
            shared.Website(
                id="necessitatibus",
                type="secondary",
                url="in",
            ),
            shared.Website(
                id="animi",
                type="work",
                url="impedit",
            ),
            shared.Website(
                id="cumque",
                type="other",
                url="ut",
            ),
        ],
    ),
)
    
res = s.companies.companies_add(req)

if res.create_hris_company_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Companies

* `companies_add` - Create Company
* `companies_all` - List Companies
* `companies_delete` - Delete Company
* `companies_one` - Get Company
* `companies_update` - Update Company

### Departments

* `departments_add` - Create Department
* `departments_all` - List Departments
* `departments_delete` - Delete Department
* `departments_one` - Get Department
* `departments_update` - Update Department

### Employee Payrolls

* `employee_payrolls_all` - List Employee Payrolls
* `employee_payrolls_one` - Get Employee Payroll

### Employee Schedules

* `employee_schedules_all` - List Employee Schedules

### Employees

* `employees_add` - Create Employee
* `employees_all` - List Employees
* `employees_delete` - Delete Employee
* `employees_one` - Get Employee
* `employees_update` - Update Employee

### Jobs

* `jobs_all` - List Jobs
* `jobs_one` - One Job

### Payrolls

* `payrolls_all` - List Payroll
* `payrolls_one` - Get Payroll

### Time Off Requests

* `time_off_requests_add` - Create Time Off Request
* `time_off_requests_all` - List Time Off Requests
* `time_off_requests_delete` - Delete Time Off Request
* `time_off_requests_one` - Get Time Off Request
* `time_off_requests_update` - Update Time Off Request

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

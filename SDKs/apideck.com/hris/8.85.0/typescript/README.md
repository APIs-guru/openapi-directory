# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { CompaniesAddRequest, CompaniesAddResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CompaniesAddRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  queryParams: {
    raw: false,
  },
  headers: {
    xApideckAppId: "aut",
    xApideckConsumerId: "voluptatum",
    xApideckServiceId: "enim",
  },
  request: {
    addresses: [
      {
        city: "adipisci",
        contactName: "eos",
        country: "est",
        county: "nesciunt",
        email: "ipsum",
        fax: "magni",
        id: "exercitationem",
        latitude: "voluptatem",
        line1: "debitis",
        line2: "non",
        line3: "aut",
        line4: "dicta",
        longitude: "qui",
        name: "architecto",
        phoneNumber: "dolore",
        postalCode: "laborum",
        rowVersion: "laborum",
        salutation: "perferendis",
        state: "vero",
        streetNumber: "ex",
        string: "qui",
        type: "home",
        website: "debitis",
      },
      {
        city: "qui",
        contactName: "culpa",
        country: "ea",
        county: "totam",
        email: "non",
        fax: "iste",
        id: "inventore",
        latitude: "repudiandae",
        line1: "beatae",
        line2: "dolorem",
        line3: "voluptas",
        line4: "dolores",
        longitude: "quam",
        name: "modi",
        phoneNumber: "cupiditate",
        postalCode: "perferendis",
        rowVersion: "earum",
        salutation: "asperiores",
        state: "illo",
        streetNumber: "odit",
        string: "distinctio",
        type: "secondary",
        website: "dolore",
      },
      {
        city: "corporis",
        contactName: "doloribus",
        country: "ut",
        county: "officiis",
        email: "explicabo",
        fax: "eum",
        id: "et",
        latitude: "neque",
        line1: "autem",
        line2: "optio",
        line3: "et",
        line4: "blanditiis",
        longitude: "architecto",
        name: "natus",
        phoneNumber: "sint",
        postalCode: "officia",
        rowVersion: "repellat",
        salutation: "et",
        state: "accusamus",
        streetNumber: "est",
        string: "et",
        type: "billing",
        website: "architecto",
      },
    ],
    companyNumber: "consequatur",
    debtorId: "quo",
    displayName: "deleniti",
    emails: [
      {
        email: "nemo",
        id: "vitae",
        type: "work",
      },
      {
        email: "commodi",
        id: "aspernatur",
        type: "primary",
      },
    ],
    legalName: "et",
    phoneNumbers: [
      {
        areaCode: "facilis",
        countryCode: "consequuntur",
        extension: "sit",
        id: "aliquid",
        number: "consequuntur",
        type: "direct-dial-in",
      },
    ],
    status: "inactive",
    subdomain: "corporis",
    websites: [
      {
        id: "necessitatibus",
        type: "secondary",
        url: "in",
      },
      {
        id: "animi",
        type: "work",
        url: "impedit",
      },
      {
        id: "cumque",
        type: "other",
        url: "ut",
      },
    ],
  },
};

sdk.companies.companiesAdd(req).then((res: CompaniesAddResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Companies

* `companiesAdd` - Create Company
* `companiesAll` - List Companies
* `companiesDelete` - Delete Company
* `companiesOne` - Get Company
* `companiesUpdate` - Update Company

### Departments

* `departmentsAdd` - Create Department
* `departmentsAll` - List Departments
* `departmentsDelete` - Delete Department
* `departmentsOne` - Get Department
* `departmentsUpdate` - Update Department

### Employee Payrolls

* `employeePayrollsAll` - List Employee Payrolls
* `employeePayrollsOne` - Get Employee Payroll

### Employee Schedules

* `employeeSchedulesAll` - List Employee Schedules

### Employees

* `employeesAdd` - Create Employee
* `employeesAll` - List Employees
* `employeesDelete` - Delete Employee
* `employeesOne` - Get Employee
* `employeesUpdate` - Update Employee

### Jobs

* `jobsAll` - List Jobs
* `jobsOne` - One Job

### Payrolls

* `payrollsAll` - List Payroll
* `payrollsOne` - Get Payroll

### Time Off Requests

* `timeOffRequestsAdd` - Create Time Off Request
* `timeOffRequestsAll` - List Time Off Requests
* `timeOffRequestsDelete` - Delete Time Off Request
* `timeOffRequestsOne` - Get Time Off Request
* `timeOffRequestsUpdate` - Update Time Off Request

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

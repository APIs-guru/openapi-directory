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
    
req = operations.CustomersAddRequest(
    security=operations.CustomersAddSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.CustomersAddQueryParams(
        raw=False,
    ),
    headers=operations.CustomersAddHeaders(
        x_apideck_app_id="iste",
        x_apideck_consumer_id="fuga",
        x_apideck_service_id="ullam",
    ),
    request=shared.CustomerSupportCustomerInput(
        addresses=[
            shared.Address(
                city="temporibus",
                contact_name="ipsam",
                country="eum",
                county="aut",
                email="et",
                fax="error",
                id="vero",
                latitude="sit",
                line1="maxime",
                line2="est",
                line3="natus",
                line4="possimus",
                longitude="sed",
                name="recusandae",
                phone_number="saepe",
                postal_code="dolorem",
                row_version="consequatur",
                salutation="recusandae",
                state="atque",
                street_number="maiores",
                string="beatae",
                type="office",
                website="exercitationem",
            ),
            shared.Address(
                city="rerum",
                contact_name="placeat",
                country="doloremque",
                county="pariatur",
                email="facilis",
                fax="consequatur",
                id="sit",
                latitude="aut",
                line1="illum",
                line2="rerum",
                line3="nobis",
                line4="nemo",
                longitude="qui",
                name="aut",
                phone_number="voluptatum",
                postal_code="enim",
                row_version="eos",
                salutation="adipisci",
                state="eos",
                street_number="est",
                string="nesciunt",
                type="office",
                website="magni",
            ),
            shared.Address(
                city="exercitationem",
                contact_name="voluptatem",
                country="debitis",
                county="non",
                email="aut",
                fax="dicta",
                id="qui",
                latitude="architecto",
                line1="dolore",
                line2="laborum",
                line3="laborum",
                line4="perferendis",
                longitude="vero",
                name="ex",
                phone_number="qui",
                postal_code="incidunt",
                row_version="debitis",
                salutation="qui",
                state="culpa",
                street_number="ea",
                string="totam",
                type="other",
                website="iste",
            ),
        ],
        bank_accounts=shared.BankAccount(
            account_name="inventore",
            account_number="repudiandae",
            account_type="other",
            bank_code="dolorem",
            bic="voluptas",
            branch_identifier="dolores",
            bsb_number="quam",
            currency="BSD",
            iban="cupiditate",
        ),
        company_name="perferendis",
        currency="IDR",
        emails=[
            shared.Email(
                email="illo",
                id="odit",
                type="primary",
            ),
        ],
        first_name="rerum",
        individual=False,
        last_name="corporis",
        notes="doloribus",
        phone_numbers=[
            shared.PhoneNumber(
                area_code="officiis",
                country_code="explicabo",
                extension="eum",
                id="et",
                number="neque",
                type="direct-dial-in",
            ),
        ],
        status="archived",
        tax_number="et",
    ),
)
    
res = s.customers_add(req)

if res.create_customer_support_customer_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `customersAdd` - Create Customer Support Customer
* `customersAll` - List Customer Support Customers
* `customersDelete` - Delete Customer Support Customer
* `customersOne` - Get Customer Support Customer
* `customersUpdate` - Update Customer Support Customer

<!-- End SDK Available Operations -->
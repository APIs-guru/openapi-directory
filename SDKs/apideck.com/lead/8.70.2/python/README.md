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
        )
        application_id=shared.SchemeApplicationID(
            api_key="YOUR_API_KEY_HERE",
        )
        consumer_id=shared.SchemeConsumerID(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.LeadsAddRequest(
    security=operations.LeadsAddSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.LeadsAddQueryParams(
        raw=False,
    ),
    headers=operations.LeadsAddHeaders(
        x_apideck_app_id="eum",
        x_apideck_consumer_id="placeat",
        x_apideck_service_id="illo",
    ),
    request=shared.LeadInput(
        addresses=[
            shared.Address(
                city="quas",
                contact_name="nemo",
                country="voluptatum",
                county="quibusdam",
                email="eos",
                fax="quae",
                id="sit",
                latitude="libero",
                line1="et",
                line2="eaque",
                line3="veritatis",
                line4="id",
                longitude="optio",
                name="inventore",
                phone_number="illo",
                postal_code="ea",
                row_version="culpa",
                salutation="accusamus",
                state="illo",
                street_number="id",
                string="est",
                type="billing",
                website="officiis",
            ),
        ],
        company_id="deserunt",
        company_name="officiis",
        contact_id="est",
        currency="BWP",
        custom_fields=[
            shared.CustomField(
                description="delectus",
                id="sint",
                name="dolor",
                value="qui",
            ),
            shared.CustomField(
                description="molestiae",
                id="error",
                name="nulla",
                value="quis",
            ),
        ],
        description="autem",
        emails=[
            shared.Email(
                email="illo",
                id="eveniet",
                type="billing",
            ),
        ],
        fax="aut",
        first_name="eveniet",
        language="animi",
        last_name="minus",
        lead_source="laudantium",
        monetary_amount=83.199997,
        name="qui",
        owner_id="incidunt",
        phone_numbers=[
            shared.PhoneNumber(
                area_code="et",
                country_code="omnis",
                extension="distinctio",
                id="repellendus",
                number="vero",
                type="secondary",
            ),
        ],
        prefix="architecto",
        social_links=[
            shared.SocialLink(
                id="et",
                type="soluta",
                url="ullam",
            ),
            shared.SocialLink(
                id="ea",
                type="veritatis",
                url="dolorum",
            ),
        ],
        status="voluptas",
        tags=[
            "saepe",
            "qui",
        ],
        title="voluptatibus",
        websites=[
            shared.Website(
                id="quia",
                type="work",
                url="tempora",
            ),
            shared.Website(
                id="quis",
                type="work",
                url="non",
            ),
        ],
    ),
)
    
res = s.leads_add(req)

if res.create_lead_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `leadsAdd` - Create lead
* `leadsAll` - List leads
* `leadsDelete` - Delete lead
* `leadsOne` - Get lead
* `leadsUpdate` - Update lead

<!-- End SDK Available Operations -->
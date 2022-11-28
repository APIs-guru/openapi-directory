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
        x_apideck_app_id="voluptatum",
        x_apideck_consumer_id="temporibus",
        x_apideck_service_id="voluptas",
    ),
    request=shared.LeadInput(
        addresses=[
            shared.Address(
                city="officiis",
                contact_name="aut",
                country="rerum",
                county="quasi",
                email="quo",
                fax="quibusdam",
                id="veniam",
                latitude="voluptatem",
                line1="facere",
                line2="rerum",
                line3="ea",
                line4="cupiditate",
                longitude="blanditiis",
                name="sed",
                phone_number="tempora",
                postal_code="neque",
                row_version="commodi",
                salutation="optio",
                state="praesentium",
                street_number="ipsa",
                string="iusto",
                type="shipping",
                website="vel",
            ),
            shared.Address(
                city="et",
                contact_name="doloremque",
                country="animi",
                county="doloremque",
                email="deserunt",
                fax="quam",
                id="corporis",
                latitude="nostrum",
                line1="qui",
                line2="praesentium",
                line3="a",
                line4="consequatur",
                longitude="rerum",
                name="qui",
                phone_number="consequatur",
                postal_code="animi",
                row_version="facere",
                salutation="perspiciatis",
                state="ut",
                street_number="facilis",
                string="beatae",
                type="office",
                website="at",
            ),
            shared.Address(
                city="sint",
                contact_name="accusamus",
                country="saepe",
                county="nihil",
                email="ut",
                fax="nostrum",
                id="porro",
                latitude="et",
                line1="maxime",
                line2="quae",
                line3="est",
                line4="odit",
                longitude="eum",
                name="placeat",
                phone_number="illo",
                postal_code="magnam",
                row_version="quas",
                salutation="nemo",
                state="voluptatum",
                street_number="quibusdam",
                string="eos",
                type="billing",
                website="sit",
            ),
        ],
        company_id="libero",
        company_name="et",
        contact_id="eaque",
        currency="CUP",
        custom_fields=[
            shared.CustomField(
                description="optio",
                id="inventore",
                name="illo",
                value="ea",
            ),
            shared.CustomField(
                description="culpa",
                id="accusamus",
                name="illo",
                value="id",
            ),
            shared.CustomField(
                description="est",
                id="architecto",
                name="officiis",
                value="deserunt",
            ),
        ],
        description="officiis",
        emails=[
            shared.Email(
                email="saepe",
                id="eius",
                type="primary",
            ),
            shared.Email(
                email="sint",
                id="dolor",
                type="secondary",
            ),
            shared.Email(
                email="molestiae",
                id="error",
                type="secondary",
            ),
        ],
        fax="quis",
        first_name="autem",
        language="ratione",
        last_name="illo",
        lead_source="eveniet",
        monetary_amount=32.099998,
        name="eveniet",
        owner_id="animi",
        phone_numbers=[
            shared.PhoneNumber(
                area_code="laudantium",
                country_code="rerum",
                extension="enim",
                id="qui",
                number="incidunt",
                type="other",
            ),
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
    
res = s.leads.leads_add(req)

if res.create_lead_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Leads

* `leads_add` - Create lead
* `leads_all` - List leads
* `leads_delete` - Delete lead
* `leads_one` - Get lead
* `leads_update` - Update lead

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

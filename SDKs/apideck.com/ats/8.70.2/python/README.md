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
    
req = operations.ApplicantsAddRequest(
    security=operations.ApplicantsAddSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.ApplicantsAddQueryParams(
        raw=True,
    ),
    headers=operations.ApplicantsAddHeaders(
        x_apideck_app_id="omnis",
        x_apideck_consumer_id="vel",
        x_apideck_service_id="nemo",
    ),
    request=shared.ApplicantInput(
        addresses=[
            shared.Address(
                city="aut",
                contact_name="in",
                country="velit",
                county="ex",
                email="reiciendis",
                fax="molestiae",
                id="praesentium",
                latitude="quis",
                line1="omnis",
                line2="praesentium",
                line3="illo",
                line4="omnis",
                longitude="iure",
                name="est",
                phone_number="eaque",
                postal_code="quas",
                row_version="suscipit",
                salutation="et",
                state="maxime",
                street_number="officiis",
                string="iste",
                type="shipping",
                website="sapiente",
            ),
            shared.Address(
                city="nulla",
                contact_name="id",
                country="et",
                county="voluptatem",
                email="officia",
                fax="optio",
                id="nihil",
                latitude="corrupti",
                line1="voluptatem",
                line2="magni",
                line3="ducimus",
                line4="reprehenderit",
                longitude="atque",
                name="quaerat",
                phone_number="suscipit",
                postal_code="similique",
                row_version="quaerat",
                salutation="ipsa",
                state="ut",
                street_number="quia",
                string="ea",
                type="home",
                website="animi",
            ),
        ],
        anonymized=True,
        applications=[
            "quia",
            "voluptas",
        ],
        archived=False,
        birthday="1984-05-23",
        confidential=False,
        coordinator_id="ipsa",
        cover_letter="alias",
        deleted=False,
        emails=[
            shared.Email(
                email="magnam",
                id="veritatis",
                type="secondary",
            ),
            shared.Email(
                email="sed",
                id="est",
                type="work",
            ),
        ],
        first_name="ad",
        followers=[
            "aliquid",
            "laboriosam",
        ],
        headline="consequuntur",
        initials="voluptatem",
        last_name="dolor",
        middle_name="expedita",
        name="qui",
        owner_id="reprehenderit",
        phone_numbers=[
            shared.PhoneNumber(
                area_code="error",
                country_code="totam",
                extension="iusto",
                id="odio",
                number="et",
                type="secondary",
            ),
            shared.PhoneNumber(
                area_code="dolores",
                country_code="numquam",
                extension="est",
                id="dolores",
                number="in",
                type="other",
            ),
            shared.PhoneNumber(
                area_code="dolore",
                country_code="minus",
                extension="dolorem",
                id="eum",
                number="et",
                type="direct-dial-in",
            ),
        ],
        photo_url="expedita",
        position_id="sit",
        record_url="quis",
        recruiter_id="nihil",
        social_links=[
            shared.ApplicantSocialLinks(
                id="praesentium",
                type="laudantium",
                url="et",
            ),
            shared.ApplicantSocialLinks(
                id="beatae",
                type="fuga",
                url="perspiciatis",
            ),
        ],
        sources=[
            "incidunt",
            "et",
            "placeat",
        ],
        stage_id="culpa",
        tags=[
            "quae",
        ],
        title="quaerat",
        websites=[
            shared.ApplicantWebsites(
                id="iusto",
                type="personal",
                url="ab",
            ),
            shared.ApplicantWebsites(
                id="veritatis",
                type="work",
                url="natus",
            ),
            shared.ApplicantWebsites(
                id="quo",
                type="primary",
                url="neque",
            ),
        ],
    ),
)
    
res = s.applicants_add(req)

if res.create_applicant_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `applicantsAdd` - Create applicant
* `applicantsAll` - List applicants
* `applicantsOne` - Get applicant
* `jobsAll` - List Jobs
* `jobsOne` - Get Job

<!-- End SDK Available Operations -->
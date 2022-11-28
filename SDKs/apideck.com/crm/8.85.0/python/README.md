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
    
req = operations.ActivitiesAddRequest(
    security=operations.ActivitiesAddSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.ActivitiesAddQueryParams(
        raw=False,
    ),
    headers=operations.ActivitiesAddHeaders(
        x_apideck_app_id="et",
        x_apideck_consumer_id="beatae",
        x_apideck_service_id="fuga",
    ),
    request=shared.ActivityInput(
        account_id="perspiciatis",
        activity_date="quas",
        activity_datetime="incidunt",
        all_day_event=True,
        archived=True,
        asset_id="culpa",
        attendees=[
            shared.ActivityAttendeeInput(
                email_address="quae",
                first_name="quaerat",
                is_organizer=True,
                last_name="iusto",
                middle_name="nihil",
                name="ab",
                prefix="veritatis",
                status="accepted",
                suffix="natus",
            ),
        ],
        campaign_id="quo",
        case_id="error",
        child=False,
        company_id="deserunt",
        contact_id="doloribus",
        contract_id="qui",
        custom_fields=[
            shared.CustomField(
                description="occaecati",
                id="dolore",
                name="dolor",
                value="beatae",
            ),
            shared.CustomField(
                description="aspernatur",
                id="non",
                name="sint",
                value="laboriosam",
            ),
        ],
        custom_object_id="quia",
        deleted=False,
        description="inventore",
        done=True,
        duration_seconds=2380683085597594969,
        end_date="perferendis",
        end_datetime="sapiente",
        event_sub_type="similique",
        group_event=False,
        group_event_type="alias",
        lead_id="dignissimos",
        location="fugiat",
        location_address=shared.Address(
            city="nihil",
            contact_name="nulla",
            country="consequatur",
            county="dolorem",
            email="voluptatibus",
            fax="provident",
            id="nostrum",
            latitude="itaque",
            line1="laudantium",
            line2="et",
            line3="omnis",
            line4="et",
            longitude="eius",
            name="earum",
            phone_number="error",
            postal_code="et",
            row_version="nesciunt",
            salutation="dolores",
            state="voluptas",
            street_number="ipsam",
            string="ipsam",
            type="other",
            website="corrupti",
        ),
        note="iure",
        opportunity_id="eligendi",
        owner_id="consequatur",
        private=True,
        product_id="et",
        recurrent=False,
        reminder_datetime="delectus",
        reminder_set=False,
        show_as="free",
        solution_id="in",
        start_datetime="voluptas",
        title="dolorem",
        type="call",
        user_id="aut",
        video_conference_id="aut",
        video_conference_url="saepe",
    ),
)
    
res = s.activities.activities_add(req)

if res.create_activity_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Activities

* `activities_add` - Create activity
* `activities_all` - List activities
* `activities_delete` - Delete activity
* `activities_one` - Get activity
* `activities_update` - Update activity

### Companies

* `companies_add` - Create company
* `companies_all` - List companies
* `companies_delete` - Delete company
* `companies_one` - Get company
* `companies_update` - Update company

### Contacts

* `contacts_add` - Create contact
* `contacts_all` - List contacts
* `contacts_delete` - Delete contact
* `contacts_one` - Get contact
* `contacts_update` - Update contact

### Leads

* `leads_add` - Create lead
* `leads_all` - List leads
* `leads_delete` - Delete lead
* `leads_one` - Get lead
* `leads_update` - Update lead

### Notes

* `notes_add` - Create note
* `notes_all` - List notes
* `notes_delete` - Delete note
* `notes_one` - Get note
* `notes_update` - Update note

### Opportunities

* `opportunities_add` - Create opportunity
* `opportunities_all` - List opportunities
* `opportunities_delete` - Delete opportunity
* `opportunities_one` - Get opportunity
* `opportunities_update` - Update opportunity

### Pipelines

* `pipelines_add` - Create pipeline
* `pipelines_all` - List pipelines
* `pipelines_delete` - Delete pipeline
* `pipelines_one` - Get pipeline
* `pipelines_update` - Update pipeline

### Users

* `users_add` - Create user
* `users_all` - List users
* `users_delete` - Delete user
* `users_one` - Get user
* `users_update` - Update user

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

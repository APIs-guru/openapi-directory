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
        x_apideck_app_id="occaecati",
        x_apideck_consumer_id="dolore",
        x_apideck_service_id="dolor",
    ),
    request=shared.ActivityInput(
        account_id="beatae",
        activity_date="aspernatur",
        activity_datetime="non",
        all_day_event=True,
        archived=True,
        asset_id="quia",
        attendees=[
            shared.ActivityAttendeeInput(
                email_address="inventore",
                first_name="nobis",
                is_organizer=True,
                last_name="perferendis",
                middle_name="sapiente",
                name="similique",
                prefix="temporibus",
                status="accepted",
                suffix="dignissimos",
            ),
            shared.ActivityAttendeeInput(
                email_address="fugiat",
                first_name="nihil",
                is_organizer=False,
                last_name="consequatur",
                middle_name="dolorem",
                name="voluptatibus",
                prefix="provident",
                status="accepted",
                suffix="itaque",
            ),
        ],
        campaign_id="laudantium",
        case_id="et",
        child=True,
        company_id="et",
        contact_id="eius",
        contract_id="earum",
        custom_fields=[
            shared.CustomField(
                description="et",
                id="nesciunt",
                name="dolores",
                value="voluptas",
            ),
        ],
        custom_object_id="ipsam",
        deleted=True,
        description="blanditiis",
        done=False,
        duration_seconds=5182791202040361805,
        end_date="eligendi",
        end_datetime="consequatur",
        event_sub_type="quaerat",
        group_event=False,
        group_event_type="ut",
        lead_id="delectus",
        location="qui",
        location_address=shared.Address(
            city="commodi",
            contact_name="in",
            country="voluptas",
            county="dolorem",
            email="placeat",
            fax="aut",
            id="aut",
            latitude="saepe",
            line1="quia",
            line2="cum",
            line3="non",
            line4="atque",
            longitude="iusto",
            name="quo",
            phone_number="tempora",
            postal_code="id",
            row_version="deleniti",
            salutation="enim",
            state="eum",
            street_number="nam",
            string="placeat",
            type="home",
            website="eum",
        ),
        note="qui",
        opportunity_id="et",
        owner_id="velit",
        private=True,
        product_id="in",
        recurrent=False,
        reminder_datetime="quia",
        reminder_set=False,
        show_as="free",
        solution_id="quia",
        start_datetime="beatae",
        title="aperiam",
        type="deadline",
        user_id="non",
        video_conference_id="tenetur",
        video_conference_url="quia",
    ),
)
    
res = s.activities_add(req)

if res.create_activity_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `activitiesAdd` - Create activity
* `activitiesAll` - List activities
* `activitiesDelete` - Delete activity
* `activitiesOne` - Get activity
* `activitiesUpdate` - Update activity
* `companiesAdd` - Create company
* `companiesAll` - List companies
* `companiesDelete` - Delete company
* `companiesOne` - Get company
* `companiesUpdate` - Update company
* `contactsAdd` - Create contact
* `contactsAll` - List contacts
* `contactsDelete` - Delete contact
* `contactsOne` - Get contact
* `contactsUpdate` - Update contact
* `leadsAdd` - Create lead
* `leadsAll` - List leads
* `leadsDelete` - Delete lead
* `leadsOne` - Get lead
* `leadsUpdate` - Update lead
* `notesAdd` - Create note
* `notesAll` - List notes
* `notesDelete` - Delete note
* `notesOne` - Get note
* `notesUpdate` - Update note
* `opportunitiesAdd` - Create opportunity
* `opportunitiesAll` - List opportunities
* `opportunitiesDelete` - Delete opportunity
* `opportunitiesOne` - Get opportunity
* `opportunitiesUpdate` - Update opportunity
* `pipelinesAdd` - Create pipeline
* `pipelinesAll` - List pipelines
* `pipelinesDelete` - Delete pipeline
* `pipelinesOne` - Get pipeline
* `pipelinesUpdate` - Update pipeline
* `usersAdd` - Create user
* `usersAll` - List users
* `usersDelete` - Delete user
* `usersOne` - Get user
* `usersUpdate` - Update user

<!-- End SDK Available Operations -->
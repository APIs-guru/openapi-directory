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
    
req = operations.MessagesAddRequest(
    security=operations.MessagesAddSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.MessagesAddQueryParams(
        raw=False,
    ),
    headers=operations.MessagesAddHeaders(
        x_apideck_app_id="accusantium",
        x_apideck_consumer_id="eaque",
        x_apideck_service_id="facilis",
    ),
    request=shared.MessageInput(
        body="quidem",
        from_="tempore",
        messaging_service_id="dignissimos",
        reference="nihil",
        scheduled_at="1982-02-02T15:42:14Z",
        subject="excepturi",
        to="ut",
        type="mms",
        webhook_url="dolorum",
    ),
)
    
res = s.messages_add(req)

if res.create_message_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `messagesAdd` - Create Message
* `messagesAll` - List Messages
* `messagesDelete` - Delete Message
* `messagesOne` - Get Message
* `messagesUpdate` - Update Message

<!-- End SDK Available Operations -->
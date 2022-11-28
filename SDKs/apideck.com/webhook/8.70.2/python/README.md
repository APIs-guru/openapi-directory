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
    
req = operations.WebhooksAddRequest(
    security=operations.WebhooksAddSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    headers=operations.WebhooksAddHeaders(
        x_apideck_app_id="quidem",
    ),
    request=shared.CreateWebhookRequest(
        delivery_url="incidunt",
        description="ratione",
        events=[
            "accounting.bill.deleted",
        ],
        status="enabled",
        unified_api="crm",
    ),
)
    
res = s.webhooks_add(req)

if res.create_webhook_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `webhooksAdd` - Create webhook
* `webhooksAll` - List webhooks
* `webhooksDelete` - Delete webhook
* `webhooksExecute` - Execute a webhook
* `webhooksOne` - Get webhook
* `webhooksShortExecute` - Execute a webhook
* `webhooksUpdate` - Update webhook

<!-- End SDK Available Operations -->
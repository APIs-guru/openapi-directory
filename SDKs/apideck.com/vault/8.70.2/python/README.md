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
        ),
    )
)
    
req = operations.ConnectionSettingsAllRequest(
    security=operations.ConnectionSettingsAllSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    path_params=operations.ConnectionSettingsAllPathParams(
        resource="eveniet",
        service_id="rerum",
        unified_api="qui",
    ),
    headers=operations.ConnectionSettingsAllHeaders(
        x_apideck_app_id="voluptatem",
        x_apideck_consumer_id="voluptatem",
    ),
)
    
res = s.connection_settings_all(req)

if res.get_connection_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `connectionSettingsAll` - Get resource settings
* `connectionSettingsUpdate` - Update settings
* `connectionsAdd` - Create connection
* `connectionsAll` - Get all connections
* `connectionsCallback` - Callback
* `connectionsDelete` - Deletes a connection
* `connectionsImport` - Import connection
* `connectionsOne` - Get connection
* `connectionsRevoke` - Revoke connection
* `connectionsToken` - Get Access Token
* `connectionsUpdate` - Update connection
* `consumerRequestCountsAll` - Consumer request counts
* `consumersAll` - Get all consumers
* `consumersOne` - Get consumer
* `logsAll` - Get all consumer request logs
* `sessionsCreate` - Create Session

<!-- End SDK Available Operations -->
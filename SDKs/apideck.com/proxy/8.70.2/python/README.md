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
    
req = operations.DeleteProxyRequest(
    security=operations.DeleteProxySecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    headers=operations.DeleteProxyHeaders(
        x_apideck_app_id="ut",
        x_apideck_consumer_id="sint",
        x_apideck_downstream_authorization="optio",
        x_apideck_downstream_url="aut",
        x_apideck_service_id="eos",
    ),
)
    
res = s.delete_proxy(req)

if res.delete_proxy_200_application_json_any is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `deleteProxy` - DELETE
* `getProxy` - GET
* `optionsProxy` - OPTIONS
* `patchProxy` - PATCH
* `postProxy` - POST
* `putProxy` - PUT

<!-- End SDK Available Operations -->
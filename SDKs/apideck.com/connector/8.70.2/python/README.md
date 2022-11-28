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
    
req = operations.APIResourceCoverageOneRequest(
    security=operations.APIResourceCoverageOneSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    path_params=operations.APIResourceCoverageOnePathParams(
        id="deserunt",
        resource_id="doloribus",
    ),
    headers=operations.APIResourceCoverageOneHeaders(
        x_apideck_app_id="qui",
    ),
)
    
res = s.api_resource_coverage_one(req)

if res.get_api_resource_coverage_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `apiResourceCoverageOne` - Get API Resource Coverage
* `apiResourcesOne` - Get API Resource
* `apisAll` - List APIs
* `apisOne` - Get API
* `connectorDocsOne` - Get Connector Doc content
* `connectorResourcesOne` - Get Connector Resource
* `connectorsAll` - List Connectors
* `connectorsOne` - Get Connector

<!-- End SDK Available Operations -->
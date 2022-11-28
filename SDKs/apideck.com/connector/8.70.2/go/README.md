# openapi

<!-- Start SDK Installation -->
## SDK Installation
```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage
```go
package main

import (
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
	opts := []sdk.SDKOption{
		sdk.WithSecurity(
            shared.Security{
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
		),
	}

	s := sdk.New(opts...)
    
    req := operations.APIResourceCoverageOneRequest{
        Security: operations.APIResourceCoverageOneSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.APIResourceCoverageOnePathParams{
            ID: "deserunt",
            ResourceID: "doloribus",
        },
        Headers: operations.APIResourceCoverageOneHeaders{
            XApideckAppID: "qui",
        },
    }
    
    res, err := s.APIResourceCoverageOne(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIResourceCoverageResponse != nil {
        // handle response
    }
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
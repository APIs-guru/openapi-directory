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
                }
                ApplicationID: shared.SchemeApplicationID{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
		),
	}

	s := sdk.New(opts...)
    
    req := operations.DeleteProxyRequest{
        Security: operations.DeleteProxySecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Headers: operations.DeleteProxyHeaders{
            XApideckAppID: "ut",
            XApideckConsumerID: "sint",
            XApideckDownstreamAuthorization: "optio",
            XApideckDownstreamURL: "aut",
            XApideckServiceID: "eos",
        },
    }
    
    res, err := s.DeleteProxy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProxy200ApplicationJSONAny != nil {
        // handle response
    }
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
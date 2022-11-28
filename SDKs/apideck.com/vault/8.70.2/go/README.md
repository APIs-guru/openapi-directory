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
    
    req := operations.ConnectionSettingsAllRequest{
        Security: operations.ConnectionSettingsAllSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.ConnectionSettingsAllPathParams{
            Resource: "eveniet",
            ServiceID: "rerum",
            UnifiedAPI: "qui",
        },
        Headers: operations.ConnectionSettingsAllHeaders{
            XApideckAppID: "voluptatem",
            XApideckConsumerID: "voluptatem",
        },
    }
    
    res, err := s.ConnectionSettingsAll(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectionResponse != nil {
        // handle response
    }
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
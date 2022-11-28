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
    
    req := operations.WebhooksAddRequest{
        Security: operations.WebhooksAddSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Headers: operations.WebhooksAddHeaders{
            XApideckAppID: "quidem",
        },
        Request: shared.CreateWebhookRequest{
            DeliveryURL: "incidunt",
            Description: "ratione",
            Events: []shared.WebhookEventTypeEnum{
                "accounting.bill.deleted",
            },
            Status: "enabled",
            UnifiedAPI: "crm",
        },
    }
    
    res, err := s.WebhooksAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWebhookResponse != nil {
        // handle response
    }
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
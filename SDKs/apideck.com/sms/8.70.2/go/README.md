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
    
    req := operations.MessagesAddRequest{
        Security: operations.MessagesAddSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.MessagesAddQueryParams{
            Raw: false,
        },
        Headers: operations.MessagesAddHeaders{
            XApideckAppID: "accusantium",
            XApideckConsumerID: "eaque",
            XApideckServiceID: "facilis",
        },
        Request: shared.MessageInput{
            Body: "quidem",
            From: "tempore",
            MessagingServiceID: "dignissimos",
            Reference: "nihil",
            ScheduledAt: "1982-02-02T15:29:24Z",
            Subject: "excepturi",
            To: "ut",
            Type: "mms",
            WebhookURL: "dolorum",
        },
    }
    
    res, err := s.MessagesAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMessageResponse != nil {
        // handle response
    }
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
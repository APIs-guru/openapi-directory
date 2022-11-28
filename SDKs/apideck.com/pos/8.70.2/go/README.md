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
    
    req := operations.ItemsAddRequest{
        Security: operations.ItemsAddSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.ItemsAddQueryParams{
            Raw: false,
        },
        Headers: operations.ItemsAddHeaders{
            XApideckAppID: "non",
            XApideckConsumerID: "doloribus",
            XApideckServiceID: "illo",
        },
        Request: shared.ItemInput{
            Abbreviation: "molestias",
            AbsentAtLocationIds: []string{
                "asperiores",
            },
            Available: false,
            AvailableForPickup: true,
            AvailableOnline: false,
            Categories: []interface{}{
                "odio",
            },
            Code: "qui",
            Cost: 37.099998,
            Deleted: false,
            Description: "dolore",
            Hidden: false,
            ID: "explicabo",
            IdempotencyKey: "repudiandae",
            ModifierGroups: []interface{}{
                "nesciunt",
                "ab",
                "ab",
            },
            Name: "ullam",
            Options: []interface{}{
                "eos",
                "et",
            },
            PresentAtAllLocations: true,
            PriceAmount: 16.200001,
            PriceCurrency: "MNT",
            PricingType: "per_unit",
            ProductType: "other",
            Sku: "in",
            TaxIds: []string{
                "nesciunt",
                "hic",
            },
            Variations: []interface{}{
                "quod",
            },
        },
    }
    
    res, err := s.ItemsAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateItemResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `itemsAdd` - Create Item
* `itemsAll` - List Items
* `itemsDelete` - Delete Item
* `itemsOne` - Get Item
* `itemsUpdate` - Update Item
* `locationsAdd` - Create Location
* `locationsAll` - List Locations
* `locationsDelete` - Delete Location
* `locationsOne` - Get Location
* `locationsUpdate` - Update Location
* `merchantsAdd` - Create Merchant
* `merchantsAll` - List Merchants
* `merchantsDelete` - Delete Merchant
* `merchantsOne` - Get Merchant
* `merchantsUpdate` - Update Merchant
* `modifierGroupsAdd` - Create Modifier Group
* `modifierGroupsAll` - List Modifier Groups
* `modifierGroupsDelete` - Delete Modifier Group
* `modifierGroupsOne` - Get Modifier Group
* `modifierGroupsUpdate` - Update Modifier Group
* `modifiersAdd` - Create Modifier
* `modifiersAll` - List Modifiers
* `modifiersDelete` - Delete Modifier
* `modifiersOne` - Get Modifier
* `modifiersUpdate` - Update Modifier
* `orderTypesAdd` - Create Order Type
* `orderTypesAll` - List Order Types
* `orderTypesDelete` - Delete Order Type
* `orderTypesOne` - Get Order Type
* `orderTypesUpdate` - Update Order Type
* `ordersAdd` - Create Order
* `ordersAll` - List Orders
* `ordersDelete` - Delete Order
* `ordersOne` - Get Order
* `ordersPay` - Pay Order
* `ordersUpdate` - Update Order
* `paymentsAdd` - Create Payment
* `paymentsAll` - List Payments
* `paymentsDelete` - Delete Payment
* `paymentsOne` - Get Payment
* `paymentsUpdate` - Update Payment
* `tendersAdd` - Create Tender
* `tendersAll` - List Tenders
* `tendersDelete` - Delete Tender
* `tendersOne` - Get Tender
* `tendersUpdate` - Update Tender

<!-- End SDK Available Operations -->
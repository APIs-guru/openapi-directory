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
    s := sdk.New()
    
    req := operations.AcceptPaymentDisputeRequest{
        Security: operations.AcceptPaymentDisputeSecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AcceptPaymentDisputePathParams{
            PaymentDisputeID: "nostrum",
        },
        Request: &shared.AcceptPaymentDisputeRequest{
            ReturnAddress: &shared.ReturnAddress{
                AddressLine1: "excepturi",
                AddressLine2: "est",
                City: "velit",
                Country: "omnis",
                County: "exercitationem",
                FullName: "at",
                PostalCode: "vitae",
                PrimaryPhone: &shared.Phone{
                    CountryCode: "non",
                    Number: "vel",
                },
                StateOrProvince: "ab",
            },
            Revision: 6854094334534866066,
        },
    }
    
    res, err := s.Sdk.AcceptPaymentDispute(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AcceptPaymentDispute` - Accept Payment Dispute
* `AddEvidence` - Add an Evidence File
* `ContestPaymentDispute` - Contest Payment Dispute
* `CreateShippingFulfillment` - When you group an order's line items into one or more packages, each package requires a corresponding plan for handling, addressing, and shipping; this is a shipping fulfillment. For each package, execute this call once to generate a shipping fulfillment associated with that package. Note: A single line item in an order can consist of multiple units of a purchased item, and one unit can consist of multiple parts or components. Although these components might be provided by the manufacturer in separate packaging, the seller must include all components of a given line item in the same package. Before using this call for a given package, you must determine which line items are in the package. If the package has been shipped, you should provide the date of shipment in the request. If not provided, it will default to the current date and time.
* `FetchEvidenceContent` - Get Payment Dispute Evidence File
* `GetActivities` - Get Payment Dispute Activity
* `GetOrder` - Use this call to retrieve the contents of an order based on its unique identifier, orderId. This value was returned in the getOrders call's orders.orderId field when you searched for orders by creation date, modification date, or fulfillment status. Include the optional fieldGroups query parameter set to TAX_BREAKDOWN to return a breakdown of the taxes and fees. The returned Order object contains information you can use to create and process fulfillments, including: Information about the buyer and seller Information about the order's line items The plans for packaging, addressing and shipping the order The status of payment, packaging, addressing, and shipping the order A summary of monetary amounts specific to the order such as pricing, payments, and shipping costs A summary of applied taxes and fees, and optionally a breakdown of each
* `GetOrders` - Use this call to search for and retrieve one or more orders based on their creation date, last modification date, or fulfillment status using the filter parameter. You can alternatively specify a list of orders using the orderIds parameter. Include the optional fieldGroups query parameter set to TAX_BREAKDOWN to return a breakdown of the taxes and fees. The returned Order objects contain information you can use to create and process fulfillments, including: Information about the buyer and seller Information about the order's line items The plans for packaging, addressing and shipping the order The status of payment, packaging, addressing, and shipping the order A summary of monetary amounts specific to the order such as pricing, payments, and shipping costs A summary of applied taxes and fees, and optionally a breakdown of each Important: In this call, the cancelStatus.cancelRequests array is returned but is always empty. Use the getOrder call instead, which returns this array fully populated with information about any cancellation requests.
* `GetPaymentDispute` - Get Payment Dispute Details
* `GetPaymentDisputeSummaries` - Search Payment Dispute by Filters
* `GetShippingFulfillment` - Use this call to retrieve the contents of a fulfillment based on its unique identifier, fulfillmentId (combined with the associated order's orderId). The fulfillmentId value was originally generated by the createShippingFulfillment call, and is returned by the getShippingFulfillments call in the members.fulfillmentId field.
* `GetShippingFulfillments` - Use this call to retrieve the contents of all fulfillments currently defined for a specified order based on the order's unique identifier, orderId. This value is returned in the getOrders call's members.orderId field when you search for orders by creation date or shipment status.
* `IssueRefund` - Issue Refund
* `UpdateEvidence` - Update evidence
* `UploadEvidenceFile` - Upload an Evidence File

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

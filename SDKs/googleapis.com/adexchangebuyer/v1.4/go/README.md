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
    
    req := operations.AdexchangebuyerAccountsGetRequest{
        Security: operations.AdexchangebuyerAccountsGetSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AdexchangebuyerAccountsGetPathParams{
            ID: 7262558848052294337,
        },
        QueryParams: operations.AdexchangebuyerAccountsGetQueryParams{
            Alt: "json",
            Fields: "illo",
            Key: "quisquam",
            OauthToken: "assumenda",
            PrettyPrint: false,
            QuotaUser: "sed",
            UserIP: "harum",
        },
    }
    
    res, err := s.Accounts.AdexchangebuyerAccountsGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `AdexchangebuyerAccountsGet` - Gets one account by ID.
* `AdexchangebuyerAccountsList` - Retrieves the authenticated user's list of accounts.
* `AdexchangebuyerAccountsPatch` - Updates an existing account. This method supports patch semantics.
* `AdexchangebuyerAccountsUpdate` - Updates an existing account.

### billingInfo

* `AdexchangebuyerBillingInfoGet` - Returns the billing information for one account specified by account ID.
* `AdexchangebuyerBillingInfoList` - Retrieves a list of billing information for all accounts of the authenticated user.

### budget

* `AdexchangebuyerBudgetGet` - Returns the budget information for the adgroup specified by the accountId and billingId.
* `AdexchangebuyerBudgetPatch` - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.
* `AdexchangebuyerBudgetUpdate` - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.

### creatives

* `AdexchangebuyerCreativesAddDeal` - Add a deal id association for the creative.
* `AdexchangebuyerCreativesGet` - Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
* `AdexchangebuyerCreativesInsert` - Submit a new creative.
* `AdexchangebuyerCreativesList` - Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.
* `AdexchangebuyerCreativesListDeals` - Lists the external deal ids associated with the creative.
* `AdexchangebuyerCreativesRemoveDeal` - Remove a deal id associated with the creative.

### marketplacedeals

* `AdexchangebuyerMarketplacedealsDelete` - Delete the specified deals from the proposal
* `AdexchangebuyerMarketplacedealsInsert` - Add new deals for the specified proposal
* `AdexchangebuyerMarketplacedealsList` - List all the deals for a given proposal
* `AdexchangebuyerMarketplacedealsUpdate` - Replaces all the deals in the proposal with the passed in deals

### marketplacenotes

* `AdexchangebuyerMarketplacenotesInsert` - Add notes to the proposal
* `AdexchangebuyerMarketplacenotesList` - Get all the notes associated with a proposal

### marketplaceprivateauction

* `AdexchangebuyerMarketplaceprivateauctionUpdateproposal` - Update a given private auction proposal

### performanceReport

* `AdexchangebuyerPerformanceReportList` - Retrieves the authenticated user's list of performance metrics.

### pretargetingConfig

* `AdexchangebuyerPretargetingConfigDelete` - Deletes an existing pretargeting config.
* `AdexchangebuyerPretargetingConfigGet` - Gets a specific pretargeting configuration
* `AdexchangebuyerPretargetingConfigInsert` - Inserts a new pretargeting configuration.
* `AdexchangebuyerPretargetingConfigList` - Retrieves a list of the authenticated user's pretargeting configurations.
* `AdexchangebuyerPretargetingConfigPatch` - Updates an existing pretargeting config. This method supports patch semantics.
* `AdexchangebuyerPretargetingConfigUpdate` - Updates an existing pretargeting config.

### products

* `AdexchangebuyerProductsGet` - Gets the requested product by id.
* `AdexchangebuyerProductsSearch` - Gets the requested product.

### proposals

* `AdexchangebuyerProposalsGet` - Get a proposal given its id
* `AdexchangebuyerProposalsInsert` - Create the given list of proposals
* `AdexchangebuyerProposalsPatch` - Update the given proposal. This method supports patch semantics.
* `AdexchangebuyerProposalsSearch` - Search for proposals using pql query
* `AdexchangebuyerProposalsSetupcomplete` - Update the given proposal to indicate that setup has been completed.
* `AdexchangebuyerProposalsUpdate` - Update the given proposal

### pubprofiles

* `AdexchangebuyerPubprofilesList` - Gets the requested publisher profile(s) by publisher accountId.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

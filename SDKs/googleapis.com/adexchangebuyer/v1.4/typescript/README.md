# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { AdexchangebuyerAccountsGetRequest, AdexchangebuyerAccountsGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AdexchangebuyerAccountsGetRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    id: 7262558848052294337,
  },
  queryParams: {
    alt: "json",
    fields: "illo",
    key: "quisquam",
    oauthToken: "assumenda",
    prettyPrint: false,
    quotaUser: "sed",
    userIp: "harum",
  },
};

sdk.accounts.adexchangebuyerAccountsGet(req).then((res: AdexchangebuyerAccountsGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `adexchangebuyerAccountsGet` - Gets one account by ID.
* `adexchangebuyerAccountsList` - Retrieves the authenticated user's list of accounts.
* `adexchangebuyerAccountsPatch` - Updates an existing account. This method supports patch semantics.
* `adexchangebuyerAccountsUpdate` - Updates an existing account.

### billingInfo

* `adexchangebuyerBillingInfoGet` - Returns the billing information for one account specified by account ID.
* `adexchangebuyerBillingInfoList` - Retrieves a list of billing information for all accounts of the authenticated user.

### budget

* `adexchangebuyerBudgetGet` - Returns the budget information for the adgroup specified by the accountId and billingId.
* `adexchangebuyerBudgetPatch` - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.
* `adexchangebuyerBudgetUpdate` - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.

### creatives

* `adexchangebuyerCreativesAddDeal` - Add a deal id association for the creative.
* `adexchangebuyerCreativesGet` - Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
* `adexchangebuyerCreativesInsert` - Submit a new creative.
* `adexchangebuyerCreativesList` - Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.
* `adexchangebuyerCreativesListDeals` - Lists the external deal ids associated with the creative.
* `adexchangebuyerCreativesRemoveDeal` - Remove a deal id associated with the creative.

### marketplacedeals

* `adexchangebuyerMarketplacedealsDelete` - Delete the specified deals from the proposal
* `adexchangebuyerMarketplacedealsInsert` - Add new deals for the specified proposal
* `adexchangebuyerMarketplacedealsList` - List all the deals for a given proposal
* `adexchangebuyerMarketplacedealsUpdate` - Replaces all the deals in the proposal with the passed in deals

### marketplacenotes

* `adexchangebuyerMarketplacenotesInsert` - Add notes to the proposal
* `adexchangebuyerMarketplacenotesList` - Get all the notes associated with a proposal

### marketplaceprivateauction

* `adexchangebuyerMarketplaceprivateauctionUpdateproposal` - Update a given private auction proposal

### performanceReport

* `adexchangebuyerPerformanceReportList` - Retrieves the authenticated user's list of performance metrics.

### pretargetingConfig

* `adexchangebuyerPretargetingConfigDelete` - Deletes an existing pretargeting config.
* `adexchangebuyerPretargetingConfigGet` - Gets a specific pretargeting configuration
* `adexchangebuyerPretargetingConfigInsert` - Inserts a new pretargeting configuration.
* `adexchangebuyerPretargetingConfigList` - Retrieves a list of the authenticated user's pretargeting configurations.
* `adexchangebuyerPretargetingConfigPatch` - Updates an existing pretargeting config. This method supports patch semantics.
* `adexchangebuyerPretargetingConfigUpdate` - Updates an existing pretargeting config.

### products

* `adexchangebuyerProductsGet` - Gets the requested product by id.
* `adexchangebuyerProductsSearch` - Gets the requested product.

### proposals

* `adexchangebuyerProposalsGet` - Get a proposal given its id
* `adexchangebuyerProposalsInsert` - Create the given list of proposals
* `adexchangebuyerProposalsPatch` - Update the given proposal. This method supports patch semantics.
* `adexchangebuyerProposalsSearch` - Search for proposals using pql query
* `adexchangebuyerProposalsSetupcomplete` - Update the given proposal to indicate that setup has been completed.
* `adexchangebuyerProposalsUpdate` - Update the given proposal

### pubprofiles

* `adexchangebuyerPubprofilesList` - Gets the requested publisher profile(s) by publisher accountId.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

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
    
req = operations.AdexchangebuyerAccountsGetRequest(
    security=operations.AdexchangebuyerAccountsGetSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.AdexchangebuyerAccountsGetPathParams(
        id=7262558848052294337,
    ),
    query_params=operations.AdexchangebuyerAccountsGetQueryParams(
        alt="json",
        fields="illo",
        key="quisquam",
        oauth_token="assumenda",
        pretty_print=False,
        quota_user="sed",
        user_ip="harum",
    ),
)
    
res = s.accounts.adexchangebuyer_accounts_get(req)

if res.account is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `adexchangebuyer_accounts_get` - Gets one account by ID.
* `adexchangebuyer_accounts_list` - Retrieves the authenticated user's list of accounts.
* `adexchangebuyer_accounts_patch` - Updates an existing account. This method supports patch semantics.
* `adexchangebuyer_accounts_update` - Updates an existing account.

### billingInfo

* `adexchangebuyer_billing_info_get` - Returns the billing information for one account specified by account ID.
* `adexchangebuyer_billing_info_list` - Retrieves a list of billing information for all accounts of the authenticated user.

### budget

* `adexchangebuyer_budget_get` - Returns the budget information for the adgroup specified by the accountId and billingId.
* `adexchangebuyer_budget_patch` - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.
* `adexchangebuyer_budget_update` - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.

### creatives

* `adexchangebuyer_creatives_add_deal` - Add a deal id association for the creative.
* `adexchangebuyer_creatives_get` - Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
* `adexchangebuyer_creatives_insert` - Submit a new creative.
* `adexchangebuyer_creatives_list` - Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.
* `adexchangebuyer_creatives_list_deals` - Lists the external deal ids associated with the creative.
* `adexchangebuyer_creatives_remove_deal` - Remove a deal id associated with the creative.

### marketplacedeals

* `adexchangebuyer_marketplacedeals_delete` - Delete the specified deals from the proposal
* `adexchangebuyer_marketplacedeals_insert` - Add new deals for the specified proposal
* `adexchangebuyer_marketplacedeals_list` - List all the deals for a given proposal
* `adexchangebuyer_marketplacedeals_update` - Replaces all the deals in the proposal with the passed in deals

### marketplacenotes

* `adexchangebuyer_marketplacenotes_insert` - Add notes to the proposal
* `adexchangebuyer_marketplacenotes_list` - Get all the notes associated with a proposal

### marketplaceprivateauction

* `adexchangebuyer_marketplaceprivateauction_updateproposal` - Update a given private auction proposal

### performanceReport

* `adexchangebuyer_performance_report_list` - Retrieves the authenticated user's list of performance metrics.

### pretargetingConfig

* `adexchangebuyer_pretargeting_config_delete` - Deletes an existing pretargeting config.
* `adexchangebuyer_pretargeting_config_get` - Gets a specific pretargeting configuration
* `adexchangebuyer_pretargeting_config_insert` - Inserts a new pretargeting configuration.
* `adexchangebuyer_pretargeting_config_list` - Retrieves a list of the authenticated user's pretargeting configurations.
* `adexchangebuyer_pretargeting_config_patch` - Updates an existing pretargeting config. This method supports patch semantics.
* `adexchangebuyer_pretargeting_config_update` - Updates an existing pretargeting config.

### products

* `adexchangebuyer_products_get` - Gets the requested product by id.
* `adexchangebuyer_products_search` - Gets the requested product.

### proposals

* `adexchangebuyer_proposals_get` - Get a proposal given its id
* `adexchangebuyer_proposals_insert` - Create the given list of proposals
* `adexchangebuyer_proposals_patch` - Update the given proposal. This method supports patch semantics.
* `adexchangebuyer_proposals_search` - Search for proposals using pql query
* `adexchangebuyer_proposals_setupcomplete` - Update the given proposal to indicate that setup has been completed.
* `adexchangebuyer_proposals_update` - Update the given proposal

### pubprofiles

* `adexchangebuyer_pubprofiles_list` - Gets the requested publisher profile(s) by publisher accountId.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

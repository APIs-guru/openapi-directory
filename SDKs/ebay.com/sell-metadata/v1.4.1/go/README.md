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
    
    req := operations.GetAutomotivePartsCompatibilityPoliciesRequest{
        Security: operations.GetAutomotivePartsCompatibilityPoliciesSecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.GetAutomotivePartsCompatibilityPoliciesPathParams{
            MarketplaceID: "dolores",
        },
        QueryParams: operations.GetAutomotivePartsCompatibilityPoliciesQueryParams{
            Filter: "qui",
        },
    }
    
    res, err := s.Sdk.GetAutomotivePartsCompatibilityPolicies(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AutomotivePartsCompatibilityPolicyResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `GetAutomotivePartsCompatibilityPolicies` - This method returns the eBay policies that define how to list automotive-parts-compatibility items in the categories of a specific marketplace. By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the filter query parameter to specify only the category IDs you want to review. Tip: This method can return a very large response payload and we strongly recommend you get the results from this call in a GZIP file by including the following HTTP header with your request: &nbsp;&nbsp;Accept-Encoding: application/gzip
* `GetItemConditionPolicies` - This method returns item condition metadata on one, multiple, or all eBay categories on an eBay marketplace. This metadata consists of the different item conditions (with IDs) that an eBay category supports, and a boolean to indicate if an eBay category requires an item condition. The identifier of the eBay marketplace is passed in as a path parameter, and unless one or more eBay category IDs are passed in through the filter query parameter, this method will return metadata on every single category for the specified marketplace. If you only want to view item condition metadata for one eBay category or a select group of eBay categories, you can pass in up to 50 eBay category ID through the filter query parameter. Important!: Certified Refurbished-eligible sellers must use an OAuth token created with the authorization code grant flow and https://api.ebay.com/oauth/api_scope/sell.inventory scope in order to retrieve the 'Certified Refurbished' condition (condition ID 2000) for the relevant categories. The Certified Refurbished item condition will not be returned if an OAuth token created with the client credentials grant flow and https://api.ebay.com/oauth/api_scope scope is used, or if any seller is not eligible to list with that item condition. See the Specifying OAuth scopes topic for more information about specifying scopes. Tip: If you retrieve metadata on all eBay categories for a marketplace, the response payload can be quite large. For this reason, we suggest that you consider using the Accept-Encoding request header and set its value to application/gzip. By doing this, the response payload output will be compressed into a GZIP file.
* `GetListingStructurePolicies` - This method returns the eBay policies that define the allowed listing structures for the categories of a specific marketplace. The listing-structure policies currently pertain to whether or not you can list items with variations. By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the filter query parameter to specify only the category IDs you want to review. Tip: This method can return a very large response payload and we strongly recommend you get the results from this call in a GZIP file by including the following HTTP header with your request: &nbsp;&nbsp;Accept-Encoding: application/gzip
* `GetNegotiatedPricePolicies` - This method returns the eBay policies that define the supported negotiated price features (like &quot;best offer&quot;) for the categories of a specific marketplace. By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the filter query parameter to specify only the category IDs you want to review. Tip: This method can return a very large response payload and we strongly recommend you get the results from this call in a GZIP file by including the following HTTP header with your request: &nbsp;&nbsp;Accept-Encoding: application/gzip
* `GetProductAdoptionPolicies` - This method retrieves a list of leaf categories for a marketplace and identifies the categories that require items to have an eBay product ID value in order to be listed in those categories. An eBay product ID value (known as an &quot;ePID&quot;) is a value that references a specific product in the eBay Catalog. Important: eBay catalog product adoption is not currently required for any product categories. If product adoption requirements change, they will be noted here. Use the marketplace_id path parameter to specify the marketplace you want to review and use the filter query parameter to limit the categories returned in the response. Tip: This method can return a very large response payload and we strongly recommend you get the results from this call in a GZIP file by including the following HTTP header with your request: &nbsp;&nbsp;Accept-Encoding: application/gzip
* `GetReturnPolicies` - This method returns the eBay policies that define whether or not you must include a return policy for the items you list in the categories of a specific marketplace, plus the guidelines for creating domestic and international return policies in the different eBay categories. By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the filter query parameter to specify only the category IDs you want to review. Tip: This method can return a very large response payload and we strongly recommend you get the results from this call in a GZIP file by including the following HTTP header with your request: &nbsp;&nbsp;Accept-Encoding: application/gzip
* `GetSalesTaxJurisdictions` - This method retrieves all the sales tax jurisdictions for the country that you specify in the countryCode path parameter. Countries with valid sales tax jurisdictions are Canada and the US. The response from this call tells you the jurisdictions for which a seller can configure tax tables. Although setting up tax tables is optional, you can use the createOrReplaceSalesTax in the Account API call to configure the tax tables for the jurisdictions you sell to.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

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
    
    req := operations.CreateFulfillmentPolicyRequest{
        Security: operations.CreateFulfillmentPolicySecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        Request: shared.FulfillmentPolicyRequest{
            CategoryTypes: []shared.CategoryType{
                shared.CategoryType{
                    Default: false,
                    Name: "voluptatibus",
                },
            },
            Description: "ipsum",
            FreightShipping: true,
            GlobalShipping: true,
            HandlingTime: &shared.TimeDuration{
                Unit: "consequatur",
                Value: 6375963961879259279,
            },
            LocalPickup: false,
            MarketplaceID: "quo",
            Name: "amet",
            PickupDropOff: false,
            ShipToLocations: &shared.RegionSet{
                RegionExcluded: []shared.Region{
                    shared.Region{
                        RegionName: "aspernatur",
                        RegionType: "at",
                    },
                    shared.Region{
                        RegionName: "esse",
                        RegionType: "temporibus",
                    },
                    shared.Region{
                        RegionName: "at",
                        RegionType: "delectus",
                    },
                },
                RegionIncluded: []shared.Region{
                    shared.Region{
                        RegionName: "nihil",
                        RegionType: "quia",
                    },
                    shared.Region{
                        RegionName: "quia",
                        RegionType: "reprehenderit",
                    },
                },
            },
            ShippingOptions: []shared.ShippingOption{
                shared.ShippingOption{
                    CostType: "et",
                    InsuranceFee: &shared.Amount{
                        Currency: "ratione",
                        Value: "at",
                    },
                    InsuranceOffered: true,
                    OptionType: "praesentium",
                    PackageHandlingCost: &shared.Amount{
                        Currency: "cum",
                        Value: "doloribus",
                    },
                    RateTableID: "consectetur",
                    ShippingServices: []shared.ShippingService{
                        shared.ShippingService{
                            AdditionalShippingCost: &shared.Amount{
                                Currency: "id",
                                Value: "ut",
                            },
                            BuyerResponsibleForPickup: false,
                            BuyerResponsibleForShipping: false,
                            CashOnDeliveryFee: &shared.Amount{
                                Currency: "est",
                                Value: "suscipit",
                            },
                            FreeShipping: true,
                            ShipToLocations: &shared.RegionSet{
                                RegionExcluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "velit",
                                        RegionType: "nihil",
                                    },
                                },
                                RegionIncluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "animi",
                                        RegionType: "magni",
                                    },
                                    shared.Region{
                                        RegionName: "rerum",
                                        RegionType: "corrupti",
                                    },
                                    shared.Region{
                                        RegionName: "sint",
                                        RegionType: "autem",
                                    },
                                },
                            },
                            ShippingCarrierCode: "voluptatem",
                            ShippingCost: &shared.Amount{
                                Currency: "suscipit",
                                Value: "ipsam",
                            },
                            ShippingServiceCode: "dolores",
                            SortOrder: 3855526099824411659,
                            Surcharge: &shared.Amount{
                                Currency: "dolores",
                                Value: "corrupti",
                            },
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Sdk.CreateFulfillmentPolicy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SetFulfillmentPolicyResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateFulfillmentPolicy` - This method creates a new fulfillment policy where the policy encapsulates seller's terms for fulfilling item purchases. Fulfillment policies include the shipment options that the seller offers to buyers. Each policy targets a marketplaceId and categoryTypes.name combination and you can create multiple policies for each combination. Be aware that some marketplaces require a specific fulfillment policy for vehicle listings. A successful request returns the URI to the new policy in the Location response header and the ID for the new policy is returned in the response payload. Tip: For details on creating and using the business policies supported by the Account API, see eBay business policies. Marketplaces and locales Policy instructions can be localized by providing a locale in the Accept-Language HTTP request header. For example, the following setting displays field values from the request body in German: Accept-Language: de-DE. Target the specific locale of a marketplace that supports multiple locales using the Content-Language request header. For example, target the French locale of the Canadian marketplace by specifying the fr-CA locale for Content-Language. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. Tip: For details on headers, see HTTP request headers.
* `CreateOrReplaceSalesTax` - This method creates or updates a sales tax table entry for a jurisdiction. Specify the tax table entry you want to configure using the two path parameters: countryCode and jurisdictionId. A tax table entry for a jurisdiction is comprised of two fields: one for the jurisdiction's sales-tax rate and another that's a boolean value indicating whether or not shipping and handling are taxed in the jurisdiction. You can set up tax tables for countries that support different tax jurisdictions. Currently, only Canada, India, and the US support separate tax jurisdictions. If you sell into any of these countries, you can set up tax tables for any of the country's jurisdictions. Retrieve valid jurisdiction IDs using getSalesTaxJurisdictions in the Metadata API. For details on using this call, see Establishing sales-tax tables. Important! Starting in January 2019, eBay will begin to calculate, collect, and remit sales tax on behalf of sellers for items shipped to customers. This feature is rolling out on specific dates to specific US states as defined on the following page: eBay sales tax collection. Once eBay starts to collect sales tax for a state, no action is required on the seller's part and there will be no charges or fees for eBay automatically calculating, collecting and remitting sales tax. The sales-tax collection process will apply to all the sales in the states that support this feature, whether the seller is located in or outside of the United States. When a buyer purchases an item on eBay, and the ship-to address is one of the states where eBay collects the sales tax, eBay will calculate and add the applicable sales tax at checkout. The buyer will pay both the cost of the item along with the sales tax. eBay will collect and remit the tax.
* `CreatePaymentPolicy` - This method creates a new payment policy where the policy encapsulates seller's terms for purchase payments. Each policy targets a marketplaceId and categoryTypes.name combination and you can create multiple policies for each combination. Be aware that some marketplaces require a specific payment policy for vehicle listings. A successful request returns the URI to the new policy in the Location response header and the ID for the new policy is returned in the response payload. Tip: For details on creating and using the business policies supported by the Account API, see eBay business policies. Marketplaces and locales Policy instructions can be localized by providing a locale in the Accept-Language HTTP request header. For example, the following setting displays field values from the request body in German: Accept-Language: de-DE. Target the specific locale of a marketplace that supports multiple locales using the Content-Language request header. For example, target the French locale of the Canadian marketplace by specifying the fr-CA locale for Content-Language. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. Tip: For details on headers, see HTTP request headers.
* `CreateReturnPolicy` - This method creates a new return policy where the policy encapsulates seller's terms for returning items. Use the Metadata API method getReturnPolicies to determine which categories require you to supply a return policy for the marketplace(s) into which you list. Each policy targets a marketplaceId and categoryTypes.name combination and you can create multiple policies for each combination. A successful request returns the URI to the new policy in the Location response header and the ID for the new policy is returned in the response payload. Tip: For details on creating and using the business policies supported by the Account API, see eBay business policies. Marketplaces and locales Policy instructions can be localized by providing a locale in the Accept-Language HTTP request header. For example, the following setting displays field values from the request body in German: Accept-Language: de-DE. Target the specific locale of a marketplace that supports multiple locales using the Content-Language request header. For example, target the French locale of the Canadian marketplace by specifying the fr-CA locale for Content-Language. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. Tip: For details on headers, see HTTP request headers.
* `DeleteFulfillmentPolicy` - This method deletes a fulfillment policy. Supply the ID of the policy you want to delete in the fulfillmentPolicyId path parameter. Note that you cannot delete the default fulfillment policy.
* `DeletePaymentPolicy` - This method deletes a payment policy. Supply the ID of the policy you want to delete in the paymentPolicyId path parameter. Note that you cannot delete the default payment policy.
* `DeleteReturnPolicy` - This method deletes a return policy. Supply the ID of the policy you want to delete in the returnPolicyId path parameter. Note that you cannot delete the default return policy.
* `DeleteSalesTax` - This call deletes a tax table entry for a jurisdiction. Specify the jurisdiction to delete using the countryCode and jurisdictionId path parameters.
* `GetFulfillmentPolicies` - This method retrieves all the fulfillment policies configured for the marketplace you specify using the marketplace_id query parameter. Marketplaces and locales Get the correct policies for a marketplace that supports multiple locales using the Content-Language request header. For example, get the policies for the French locale of the Canadian marketplace by specifying fr-CA for the Content-Language header. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. For details on header values, see HTTP request headers.
* `GetFulfillmentPolicy` - This method retrieves the complete details of a fulfillment policy. Supply the ID of the policy you want to retrieve using the fulfillmentPolicyId path parameter.
* `GetFulfillmentPolicyByName` - This method retrieves the complete details for a single fulfillment policy. In the request, supply both the policy name and its associated marketplace_id as query parameters. Marketplaces and locales Get the correct policy for a marketplace that supports multiple locales using the Content-Language request header. For example, get a policy for the French locale of the Canadian marketplace by specifying fr-CA for the Content-Language header. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. For details on header values, see HTTP request headers.
* `GetKyc` - This method is used by sellers onboarded for eBay managed payments, or sellers who are currently going through, or who are eligible for onboarding for eBay managed payments. With this method, a seller can discover if there are any action items in regards to providing more documentation and/or information about themselves, their company, or the bank account they are or will be using for seller payouts. These 'action items' are also know as 'Know Your Customer' (or KYC) checks. This method does not require any parameters other than the OAuth user token associated with the seller's account. If the managed payments seller does not currently have any pending 'KYC' action items, only a 204 No Content HTTP status code is returned, and no response payload. Note: This method is not applicable for sellers who are not eligible for eBay managed payments. For sellers who sell on one or more eBay marketplaces that currently support managed payments, they can check on their managed payments onboarding status by using the getPaymentsProgramOnboarding method.
* `GetOptedInPrograms` - This method gets a list of the seller programs that the seller has opted-in to.
* `GetPaymentPolicies` - This method retrieves all the payment policies configured for the marketplace you specify using the marketplace_id query parameter. Marketplaces and locales Get the correct policies for a marketplace that supports multiple locales using the Content-Language request header. For example, get the policies for the French locale of the Canadian marketplace by specifying fr-CA for the Content-Language header. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. For details on header values, see HTTP request headers.
* `GetPaymentPolicy` - This method retrieves the complete details of a payment policy. Supply the ID of the policy you want to retrieve using the paymentPolicyId path parameter.
* `GetPaymentPolicyByName` - This method retrieves the complete details of a single payment policy. Supply both the policy name and its associated marketplace_id in the request query parameters. Marketplaces and locales Get the correct policy for a marketplace that supports multiple locales using the Content-Language request header. For example, get a policy for the French locale of the Canadian marketplace by specifying fr-CA for the Content-Language header. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. For details on header values, see HTTP request headers.
* `GetPaymentsProgram` - This method returns whether or not the user is opted-in to the specified payments program. Sellers opt-in to payments programs by marketplace and you use the marketplace_id path parameter to specify the marketplace of the status flag you want returned. Note: Currently, the only supported payments program is eBay Payments. For details, see: Managed Payments on eBay Payments Terms of Use
* `GetPaymentsProgramOnboarding` - This method retrieves a seller's onboarding status of eBay managed payments for a specified marketplace. The overall onboarding status of the seller and the status of each onboarding step is returned. Presently, the only supported payments program type is EBAY_PAYMENTS. See Managed Payments on eBay and Payments Terms of Use. Note: Managed payments availability: eBay managed payments is presently available in the US and Germany, and will roll out to Canada, UK, and Australia in July 2020.
* `GetPrivileges` - This method retrieves the seller's current set of privileges. The call returns whether or not the seller's eBay registration has been completed, as well as the details of their site-wide sellingLimt (the amount and quantity they can sell on a given day).
* `GetRateTables` - This method retrieves a seller's shipping rate tables for the country specified in the country_code query parameter. If you call this method without specifying a country code, the call returns all the seller's shipping rate tables. The method's response includes a rateTableId for each table defined by the seller. Use a table's ID value in a fulfillment policy to specify the shipping rate table to use for that policy's DOMESTIC or INTERNATIONAL shipping option (make sure the locality of the rate table matches the optionType of the shipping option). This call currently supports getting rate tables related to the following marketplaces: EBAY_AU EBAY_CA EBAY_DE EBAY_ES EBAY_FR EBAY_GB EBAY_IT EBAY_US Note: Rate tables created with the Trading API might not have been assigned a rateTableId at the time of their creation. This method can assign and return rateTableId values for rate tables with missing IDs if you make a request using the country_code where the seller has defined rate tables. Sellers can define up to 40 shipping rate tables for their account, which lets them set up different rate tables for each of the marketplaces they sell into. Go to My eBay &gt; Account &gt; Site Preferences to create and maintain the rate tables. For more, see Using shipping rate tables. If you're using the Trading API, use the rate table ID values in the RateTableDetails container of the Add/Revise/Relist calls. If the locality for a rate table is set to DOMESTIC, pass the ID value in the RateTableDetails.DomesticRateTableId field. Otherwise, if locality is INTERNATIONAL, pass the ID value in RateTableDetails.InternationalRateTableId.
* `GetReturnPolicies` - This method retrieves all the return policies configured for the marketplace you specify using the marketplace_id query parameter. Marketplaces and locales Get the correct policies for a marketplace that supports multiple locales using the Content-Language request header. For example, get the policies for the French locale of the Canadian marketplace by specifying fr-CA for the Content-Language header. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. For details on header values, see HTTP request headers.
* `GetReturnPolicy` - This method retrieves the complete details of the return policy specified by the returnPolicyId path parameter.
* `GetReturnPolicyByName` - This method retrieves the complete details of a single return policy. Supply both the policy name and its associated marketplace_id in the request query parameters. Marketplaces and locales Get the correct policy for a marketplace that supports multiple locales using the Content-Language request header. For example, get a policy for the French locale of the Canadian marketplace by specifying fr-CA for the Content-Language header. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. For details on header values, see HTTP request headers.
* `GetSalesTax` - This call gets the current tax table entry for a specific tax jurisdiction. Specify the jurisdiction to retrieve using the countryCode and jurisdictionId path parameters.
* `GetSalesTaxes` - Use this call to retrieve a sales tax table that the seller established for a specific country. Specify the tax table to retrieve using the country_code query parameter.
* `OptInToProgram` - This method opts the seller in to an eBay seller program. Refer to the Account API overview for information about available eBay seller programs. Note: It can take up to 24-hours for eBay to process your request to opt-in to a Seller Program. Use the getOptedInPrograms call to check the status of your request after the processing period has passed.
* `OptOutOfProgram` - This method opts the seller out of a seller program to which you have previously opted-in to. Get a list of the seller programs you have opted-in to using the getOptedInPrograms call.
* `UpdateFulfillmentPolicy` - This method updates an existing fulfillment policy. Specify the policy you want to update using the fulfillment_policy_id path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.
* `UpdatePaymentPolicy` - This method updates an existing payment policy. Specify the policy you want to update using the payment_policy_id path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.
* `UpdateReturnPolicy` - This method updates an existing return policy. Specify the policy you want to update using the return_policy_id path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

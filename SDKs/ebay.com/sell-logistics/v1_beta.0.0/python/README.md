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
    
req = operations.CancelShipmentRequest(
    security=operations.CancelShipmentSecurity(
        api_auth=shared.SchemeAPIAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CancelShipmentPathParams(
        shipment_id="dicta",
    ),
)
    
res = s.sdk.cancel_shipment(req)

if res.shipment is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `cancel_shipment` - This method cancels the shipment associated with the specified shipment ID and the associated shipping label is deleted. When you cancel a shipment, the totalShippingCost of the canceled shipment is refunded to the account established by the user's billing agreement. Note that you cannot cancel a shipment if you have used the associated shipping label.
* `create_from_shipping_quote` - This method creates a &quot;shipment&quot; based on the shippingQuoteId and rateId values supplied in the request. The rate identified by the rateId value specifies the carrier and service for the package shipment, and the rate ID must be contained in the shipping quote identified by the shippingQuoteId value. Call createShippingQuote to retrieve a set of live shipping rates. When you create a shipment, eBay generates a shipping label that you can download and use to ship your package. In a createFromShippingQuote request, sellers can include a list of shipping options they want to add to the base service quoted in the selected rate. The list of available shipping options is specific to each quoted rate and if available, the options are listed in the rate container of the of the shipping quote. In addition to a configurable return-to location and other details about the shipment, the response to this method includes: The shipping carrier and service to be used for the package shipment A list of selected shipping options, if any The shipment tracking number The total shipping cost (the sum cost of the base shipping service and any added options) When you create a shipment, your billing agreement account is charged the sum of the baseShippingCost and the total cost of any additional shipping options you might have selected. Use the URL returned in labelDownloadUrl field, or call downloadLabelFile with the shipmentId value from the response, to download a shipping label for your package. Important! Sellers must set up their payment method with eBay before they can use this method to create a shipment and the associated shipping label.
* `create_shipping_quote` - The createShippingQuote method returns a shipping quote that contains a list of live &quot;rates.&quot; Each rate represents an offer made by a shipping carrier for a specific service and each offer has a live quote for the base service cost. Rates have a time window in which they are &quot;live,&quot; and rates expire when their purchase window ends. If offered by the carrier, rates can include shipping options (and their associated prices), and users can add any offered shipping option to the base service should they desire. Also, depending on the services required, rates can also include pickup and delivery windows. Each rate is for a single package and is based on the following information: The shipping origin The shipping destination The package size (weight and dimensions) Rates are identified by a unique eBay-assigned rateId and rates are based on price points, pickup and delivery time frames, and other user requirements. Because each rate offered must be compliant with the eBay shipping program, all rates reflect eBay-negotiated prices. The various rates returned in a shipping quote offer the user a choice from which they can choose a shipping service that best fits their needs. Select the rate for your shipment and using the associated rateId, call cerateFromShippingQuote to create a shipment and generate a shipping label that you can use to ship the package.
* `download_label_file` - This method returns the shipping label file that was generated for the shipmentId value specified in the request. Call createFromShippingQuote to generate a shipment ID. Use the Accept HTTP header to specify the format of the returned file. The default file format is a PDF file.
* `get_shipment` - This method retrieves the shipment details for the specified shipment ID. Call createFromShippingQuote to generate a shipment ID.
* `get_shipping_quote` - This method retrieves the complete details of the shipping quote associated with the specified shippingQuoteId value. A &quot;shipping quote&quot; pertains to a single specific package and contains a set of shipping &quot;rates&quot; that quote the cost to ship the package by different shipping carriers and services. The quotes are based on the package's origin, destination, and size. Call createShippingQuote to create a shippingQuoteId.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

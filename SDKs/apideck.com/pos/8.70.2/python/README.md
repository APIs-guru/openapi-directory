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
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.ItemsAddRequest(
    security=operations.ItemsAddSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.ItemsAddQueryParams(
        raw=False,
    ),
    headers=operations.ItemsAddHeaders(
        x_apideck_app_id="non",
        x_apideck_consumer_id="doloribus",
        x_apideck_service_id="illo",
    ),
    request=shared.ItemInput(
        abbreviation="molestias",
        absent_at_location_ids=[
            "asperiores",
        ],
        available=False,
        available_for_pickup=True,
        available_online=False,
        categories=[
            "odio",
        ],
        code="qui",
        cost=37.099998,
        deleted=False,
        description="dolore",
        hidden=False,
        id="explicabo",
        idempotency_key="repudiandae",
        modifier_groups=[
            "nesciunt",
            "ab",
            "ab",
        ],
        name="ullam",
        options=[
            "eos",
            "et",
        ],
        present_at_all_locations=True,
        price_amount=16.200001,
        price_currency="MNT",
        pricing_type="per_unit",
        product_type="other",
        sku="in",
        tax_ids=[
            "nesciunt",
            "hic",
        ],
        variations=[
            "quod",
        ],
    ),
)
    
res = s.items_add(req)

if res.create_item_response is not None:
    # handle response
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
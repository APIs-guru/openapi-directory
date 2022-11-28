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
    
req = operations.GetCarDealerInventoryActiveRequest(
    query_params=operations.GetCarDealerInventoryActiveQueryParams(
        api_key="aliquam",
        append_api_key=True,
        base_exterior_color="fuga",
        base_interior_color="vero",
        body_subtype="eius",
        body_type="veniam",
        car_type="new",
        carfax_1_owner="true",
        carfax_clean_title="true",
        city="quia",
        city_mpg_range="similique",
        country="all",
        cylinders="ipsa",
        dealer_id="tenetur",
        dealer_name="voluptas",
        dealer_type="independent",
        dealership_group_name="inventore",
        dedup=True,
        dom_180_range="fuga",
        dom_active_range="officiis",
        dom_range="laborum",
        doors="et",
        drivetrain="quia",
        engine="voluptatem",
        engine_aspiration="vel",
        engine_block="et",
        engine_size="incidunt",
        exclude_certified=False,
        exterior_color="consequuntur",
        facet_sort="count",
        facets="harum",
        finance_down_payment="debitis",
        finance_down_payment_per="et",
        finance_emp="ut",
        finance_loan_apr="ut",
        finance_loan_term="deleniti",
        first_seen_at_mc_days="omnis",
        first_seen_at_mc_range="quam",
        first_seen_at_source_days="tempora",
        first_seen_at_source_range="sed",
        first_seen_days="recusandae",
        first_seen_range="magnam",
        fuel_type="et",
        highway_mpg_range="blanditiis",
        include_finance=False,
        include_lease=True,
        include_non_vin_listings=False,
        include_relevant_links=False,
        interior_color="saepe",
        last_seen_days="facere",
        last_seen_range="sunt",
        latitude=6.100000,
        lease_down_payment="quia",
        lease_emp="officia",
        lease_term="qui",
        longitude=60.099998,
        make="sed",
        match="consectetur",
        miles_range="quis",
        mm="unde",
        model="quibusdam",
        msa_code="accusantium",
        msrp_range="architecto",
        nodedup=True,
        owned=True,
        photo_links=False,
        plot=True,
        price_range="illum",
        radius=8122225401490503898,
        range_facets="est",
        rows=7766847039270466350,
        sort_by="consequatur",
        sort_order="ASC",
        source="voluptatibus",
        start=8433307220646589805,
        state="repudiandae",
        stats="ipsum",
        stock_no="perspiciatis",
        taxonomy_vins="cum",
        transmission="praesentium",
        trim="dolorum",
        trim_o="voluptatem",
        trim_r="qui",
        vehicle_type="ea",
        vin="dolores",
        vins="sapiente",
        year="et",
        ymm="rem",
        ymmt="suscipit",
        zip="voluptas",
    ),
)
    
res = s.sdk.get_car_dealer_inventory_active(req)

if res.search_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `get_car_dealer_inventory_active` - Get dealers active inventory
* `get_dealer_heavy_equipment_id_` - Dealer by id
* `get_dealer_motorcycle_id_` - Dealer by id
* `get_dealer_rv_id_` - Dealer by id
* `get_dealers_heavy_equipment` - Find car dealers around
* `get_dealers_motorcycle` - Find car dealers around
* `get_dealers_rv` - Find car dealers around
* `get_listing_car_auction_id_` - Listing by id
* `get_listing_car_auction_id_extra` - Long text Listings attributes for Listing with the given id
* `get_listing_car_auction_id_media` - Listing media by id
* `get_listing_car_fsbo_id_` - Listing by id
* `get_listing_car_fsbo_id_extra` - Long text Listings attributes for Listing with the given id
* `get_listing_car_fsbo_id_media` - Listing media by id
* `get_listing_car_id_extra` - Long text Listings attributes for Listing with the given id
* `get_listing_car_id_media` - Listing media by id
* `get_listing_heavy_equipment_id_` - Heavy equipment listing by id
* `get_listing_heavy_equipment_id_extra` - Long text Heavy equipment Listings attributes for Listing with the given id
* `get_listing_heavy_equipment_id_media` - Listing media by id
* `get_listing_motorcycle_id_` - Motorcycle listing by id
* `get_listing_motorcycle_id_extra` - Long text Motorcycle Listings attributes for Listing with the given id
* `get_listing_motorcycle_id_media` - Motorcycle listing media by id
* `get_listing_rv_id_` - RV listing by id
* `get_listing_rv_id_extra` - Long text RV Listings attributes for Listing with the given id
* `get_listing_rv_id_media` - Listing media by id
* `get_search_car_auction_active` - Gets active auction car listings for the given search criteria
* `get_search_car_fsbo_active` - Gets active private party car listings for the given search criteria
* `get_search_car_incentive_oem` - Gets oem incentive listings for the given search criteria
* `get_search_car_recents` - Gets Recent car listings for the given search criteria
* `get_search_heavy_equipment_active` - Gets active heavy equipment listings for the given search criteria
* `get_search_heavy_equipment_auto_complete` - API for auto-completion of inputs
* `get_search_motorcycle_active` - Gets active motorcycle listings for the given search criteria
* `get_search_motorcycle_auto_complete` - API for auto-completion of inputs
* `get_search_rv_active` - Gets active RV listings for the given search criteria
* `get_search_rv_auto_complete` - API for auto-completion of inputs
* `get_specs_car_auto_complete` - API for auto-completion of inputs based on taxonomy
* `auto_complete` - API for auto-completion of inputs
* `crm_check` - CRM check of a particular vin
* `dealer_search` - Find car dealers around
* `decode` - VIN Decoder
* `decode_via_epi` - EPI VIN Decoder
* `get_cached_image` - Fetch cached image
* `get_car_history` - Get a cars online listing history
* `get_daily_stats` - Price, Miles and Days on Market stats
* `get_dealer` - Dealer by id
* `get_listing` - Listing by id
* `get_mds` - Market Days Supply
* `get_popular_cars` - Get make model wise top 50 popular cars on national, state, city level
* `get_recall_history` - Recall info by vin
* `get_sales_count` - Get sales count by make, model, year, trim or taxonomy vin
* `get_taxonomy_terms` - API for getting terms from taxonomy
* `rank_car` - Compute relative rank for car listings.
* `search` - Gets active car listings for the given search criteria
* `search_and_rank_car` - Compute relative rank for car listings.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

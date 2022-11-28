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
    
    req := operations.GetCarDealerInventoryActiveRequest{
        QueryParams: operations.GetCarDealerInventoryActiveQueryParams{
            APIKey: "aliquam",
            AppendAPIKey: true,
            BaseExteriorColor: "fuga",
            BaseInteriorColor: "vero",
            BodySubtype: "eius",
            BodyType: "veniam",
            CarType: "new",
            Carfax1Owner: "true",
            CarfaxCleanTitle: "true",
            City: "quia",
            CityMpgRange: "similique",
            Country: "all",
            Cylinders: "ipsa",
            DealerID: "tenetur",
            DealerName: "voluptas",
            DealerType: "independent",
            DealershipGroupName: "inventore",
            Dedup: true,
            Dom180Range: "fuga",
            DomActiveRange: "officiis",
            DomRange: "laborum",
            Doors: "et",
            Drivetrain: "quia",
            Engine: "voluptatem",
            EngineAspiration: "vel",
            EngineBlock: "et",
            EngineSize: "incidunt",
            ExcludeCertified: false,
            ExteriorColor: "consequuntur",
            FacetSort: "count",
            Facets: "harum",
            FinanceDownPayment: "debitis",
            FinanceDownPaymentPer: "et",
            FinanceEmp: "ut",
            FinanceLoanApr: "ut",
            FinanceLoanTerm: "deleniti",
            FirstSeenAtMcDays: "omnis",
            FirstSeenAtMcRange: "quam",
            FirstSeenAtSourceDays: "tempora",
            FirstSeenAtSourceRange: "sed",
            FirstSeenDays: "recusandae",
            FirstSeenRange: "magnam",
            FuelType: "et",
            HighwayMpgRange: "blanditiis",
            IncludeFinance: false,
            IncludeLease: true,
            IncludeNonVinListings: false,
            IncludeRelevantLinks: false,
            InteriorColor: "saepe",
            LastSeenDays: "facere",
            LastSeenRange: "sunt",
            Latitude: 6.100000,
            LeaseDownPayment: "quia",
            LeaseEmp: "officia",
            LeaseTerm: "qui",
            Longitude: 60.099998,
            Make: "sed",
            Match: "consectetur",
            MilesRange: "quis",
            Mm: "unde",
            Model: "quibusdam",
            MsaCode: "accusantium",
            MsrpRange: "architecto",
            Nodedup: true,
            Owned: true,
            PhotoLinks: false,
            Plot: true,
            PriceRange: "illum",
            Radius: 8122225401490503898,
            RangeFacets: "est",
            Rows: 7766847039270466350,
            SortBy: "consequatur",
            SortOrder: "ASC",
            Source: "voluptatibus",
            Start: 8433307220646589805,
            State: "repudiandae",
            Stats: "ipsum",
            StockNo: "perspiciatis",
            TaxonomyVins: "cum",
            Transmission: "praesentium",
            Trim: "dolorum",
            TrimO: "voluptatem",
            TrimR: "qui",
            VehicleType: "ea",
            Vin: "dolores",
            Vins: "sapiente",
            Year: "et",
            Ymm: "rem",
            Ymmt: "suscipit",
            Zip: "voluptas",
        },
    }
    
    res, err := s.Sdk.GetCarDealerInventoryActive(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `GetCarDealerInventoryActive` - Get dealers active inventory
* `GetDealerHeavyEquipmentID` - Dealer by id
* `GetDealerMotorcycleID` - Dealer by id
* `GetDealerRvID` - Dealer by id
* `GetDealersHeavyEquipment` - Find car dealers around
* `GetDealersMotorcycle` - Find car dealers around
* `GetDealersRv` - Find car dealers around
* `GetListingCarAuctionID` - Listing by id
* `GetListingCarAuctionIDExtra` - Long text Listings attributes for Listing with the given id
* `GetListingCarAuctionIDMedia` - Listing media by id
* `GetListingCarFsboID` - Listing by id
* `GetListingCarFsboIDExtra` - Long text Listings attributes for Listing with the given id
* `GetListingCarFsboIDMedia` - Listing media by id
* `GetListingCarIDExtra` - Long text Listings attributes for Listing with the given id
* `GetListingCarIDMedia` - Listing media by id
* `GetListingHeavyEquipmentID` - Heavy equipment listing by id
* `GetListingHeavyEquipmentIDExtra` - Long text Heavy equipment Listings attributes for Listing with the given id
* `GetListingHeavyEquipmentIDMedia` - Listing media by id
* `GetListingMotorcycleID` - Motorcycle listing by id
* `GetListingMotorcycleIDExtra` - Long text Motorcycle Listings attributes for Listing with the given id
* `GetListingMotorcycleIDMedia` - Motorcycle listing media by id
* `GetListingRvID` - RV listing by id
* `GetListingRvIDExtra` - Long text RV Listings attributes for Listing with the given id
* `GetListingRvIDMedia` - Listing media by id
* `GetSearchCarAuctionActive` - Gets active auction car listings for the given search criteria
* `GetSearchCarFsboActive` - Gets active private party car listings for the given search criteria
* `GetSearchCarIncentiveOem` - Gets oem incentive listings for the given search criteria
* `GetSearchCarRecents` - Gets Recent car listings for the given search criteria
* `GetSearchHeavyEquipmentActive` - Gets active heavy equipment listings for the given search criteria
* `GetSearchHeavyEquipmentAutoComplete` - API for auto-completion of inputs
* `GetSearchMotorcycleActive` - Gets active motorcycle listings for the given search criteria
* `GetSearchMotorcycleAutoComplete` - API for auto-completion of inputs
* `GetSearchRvActive` - Gets active RV listings for the given search criteria
* `GetSearchRvAutoComplete` - API for auto-completion of inputs
* `GetSpecsCarAutoComplete` - API for auto-completion of inputs based on taxonomy
* `AutoComplete` - API for auto-completion of inputs
* `CrmCheck` - CRM check of a particular vin
* `DealerSearch` - Find car dealers around
* `Decode` - VIN Decoder
* `DecodeViaEpi` - EPI VIN Decoder
* `GetCachedImage` - Fetch cached image
* `GetCarHistory` - Get a cars online listing history
* `GetDailyStats` - Price, Miles and Days on Market stats
* `GetDealer` - Dealer by id
* `GetListing` - Listing by id
* `GetMds` - Market Days Supply
* `GetPopularCars` - Get make model wise top 50 popular cars on national, state, city level
* `GetRecallHistory` - Recall info by vin
* `GetSalesCount` - Get sales count by make, model, year, trim or taxonomy vin
* `GetTaxonomyTerms` - API for getting terms from taxonomy
* `RankCar` - Compute relative rank for car listings.
* `Search` - Gets active car listings for the given search criteria
* `SearchAndRankCar` - Compute relative rank for car listings.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

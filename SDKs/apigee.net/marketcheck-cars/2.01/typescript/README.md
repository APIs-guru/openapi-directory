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
import { GetCarDealerInventoryActiveRequest, GetCarDealerInventoryActiveResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetCarDealerInventoryActiveRequest = {
  queryParams: {
    apiKey: "aliquam",
    appendApiKey: true,
    baseExteriorColor: "fuga",
    baseInteriorColor: "vero",
    bodySubtype: "eius",
    bodyType: "veniam",
    carType: "new",
    carfax1Owner: "true",
    carfaxCleanTitle: "true",
    city: "quia",
    cityMpgRange: "similique",
    country: "all",
    cylinders: "ipsa",
    dealerId: "tenetur",
    dealerName: "voluptas",
    dealerType: "independent",
    dealershipGroupName: "inventore",
    dedup: true,
    dom180Range: "fuga",
    domActiveRange: "officiis",
    domRange: "laborum",
    doors: "et",
    drivetrain: "quia",
    engine: "voluptatem",
    engineAspiration: "vel",
    engineBlock: "et",
    engineSize: "incidunt",
    excludeCertified: false,
    exteriorColor: "consequuntur",
    facetSort: "count",
    facets: "harum",
    financeDownPayment: "debitis",
    financeDownPaymentPer: "et",
    financeEmp: "ut",
    financeLoanApr: "ut",
    financeLoanTerm: "deleniti",
    firstSeenAtMcDays: "omnis",
    firstSeenAtMcRange: "quam",
    firstSeenAtSourceDays: "tempora",
    firstSeenAtSourceRange: "sed",
    firstSeenDays: "recusandae",
    firstSeenRange: "magnam",
    fuelType: "et",
    highwayMpgRange: "blanditiis",
    includeFinance: false,
    includeLease: true,
    includeNonVinListings: false,
    includeRelevantLinks: false,
    interiorColor: "saepe",
    lastSeenDays: "facere",
    lastSeenRange: "sunt",
    latitude: 6.100000,
    leaseDownPayment: "quia",
    leaseEmp: "officia",
    leaseTerm: "qui",
    longitude: 60.099998,
    make: "sed",
    match: "consectetur",
    milesRange: "quis",
    mm: "unde",
    model: "quibusdam",
    msaCode: "accusantium",
    msrpRange: "architecto",
    nodedup: true,
    owned: true,
    photoLinks: false,
    plot: true,
    priceRange: "illum",
    radius: 8122225401490503898,
    rangeFacets: "est",
    rows: 7766847039270466350,
    sortBy: "consequatur",
    sortOrder: "ASC",
    source: "voluptatibus",
    start: 8433307220646589805,
    state: "repudiandae",
    stats: "ipsum",
    stockNo: "perspiciatis",
    taxonomyVins: "cum",
    transmission: "praesentium",
    trim: "dolorum",
    trimO: "voluptatem",
    trimR: "qui",
    vehicleType: "ea",
    vin: "dolores",
    vins: "sapiente",
    year: "et",
    ymm: "rem",
    ymmt: "suscipit",
    zip: "voluptas",
  },
};

sdk.sdk.getCarDealerInventoryActive(req).then((res: GetCarDealerInventoryActiveResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `getCarDealerInventoryActive` - Get dealers active inventory
* `getDealerHeavyEquipmentId` - Dealer by id
* `getDealerMotorcycleId` - Dealer by id
* `getDealerRvId` - Dealer by id
* `getDealersHeavyEquipment` - Find car dealers around
* `getDealersMotorcycle` - Find car dealers around
* `getDealersRv` - Find car dealers around
* `getListingCarAuctionId` - Listing by id
* `getListingCarAuctionIdExtra` - Long text Listings attributes for Listing with the given id
* `getListingCarAuctionIdMedia` - Listing media by id
* `getListingCarFsboId` - Listing by id
* `getListingCarFsboIdExtra` - Long text Listings attributes for Listing with the given id
* `getListingCarFsboIdMedia` - Listing media by id
* `getListingCarIdExtra` - Long text Listings attributes for Listing with the given id
* `getListingCarIdMedia` - Listing media by id
* `getListingHeavyEquipmentId` - Heavy equipment listing by id
* `getListingHeavyEquipmentIdExtra` - Long text Heavy equipment Listings attributes for Listing with the given id
* `getListingHeavyEquipmentIdMedia` - Listing media by id
* `getListingMotorcycleId` - Motorcycle listing by id
* `getListingMotorcycleIdExtra` - Long text Motorcycle Listings attributes for Listing with the given id
* `getListingMotorcycleIdMedia` - Motorcycle listing media by id
* `getListingRvId` - RV listing by id
* `getListingRvIdExtra` - Long text RV Listings attributes for Listing with the given id
* `getListingRvIdMedia` - Listing media by id
* `getSearchCarAuctionActive` - Gets active auction car listings for the given search criteria
* `getSearchCarFsboActive` - Gets active private party car listings for the given search criteria
* `getSearchCarIncentiveOem` - Gets oem incentive listings for the given search criteria
* `getSearchCarRecents` - Gets Recent car listings for the given search criteria
* `getSearchHeavyEquipmentActive` - Gets active heavy equipment listings for the given search criteria
* `getSearchHeavyEquipmentAutoComplete` - API for auto-completion of inputs
* `getSearchMotorcycleActive` - Gets active motorcycle listings for the given search criteria
* `getSearchMotorcycleAutoComplete` - API for auto-completion of inputs
* `getSearchRvActive` - Gets active RV listings for the given search criteria
* `getSearchRvAutoComplete` - API for auto-completion of inputs
* `getSpecsCarAutoComplete` - API for auto-completion of inputs based on taxonomy
* `autoComplete` - API for auto-completion of inputs
* `crmCheck` - CRM check of a particular vin
* `dealerSearch` - Find car dealers around
* `decode` - VIN Decoder
* `decodeViaEpi` - EPI VIN Decoder
* `getCachedImage` - Fetch cached image
* `getCarHistory` - Get a cars online listing history
* `getDailyStats` - Price, Miles and Days on Market stats
* `getDealer` - Dealer by id
* `getListing` - Listing by id
* `getMds` - Market Days Supply
* `getPopularCars` - Get make model wise top 50 popular cars on national, state, city level
* `getRecallHistory` - Recall info by vin
* `getSalesCount` - Get sales count by make, model, year, trim or taxonomy vin
* `getTaxonomyTerms` - API for getting terms from taxonomy
* `rankCar` - Compute relative rank for car listings.
* `search` - Gets active car listings for the given search criteria
* `searchAndRankCar` - Compute relative rank for car listings.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

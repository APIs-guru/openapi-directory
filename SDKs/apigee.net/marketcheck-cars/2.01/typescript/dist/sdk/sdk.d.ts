import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://marketcheck-prod.apigee.net/v2"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getCarDealerInventoryActive - Get dealers active inventory
     *
     * Get dealers active inventory
    **/
    getCarDealerInventoryActive(req: operations.GetCarDealerInventoryActiveRequest, config?: AxiosRequestConfig): Promise<operations.GetCarDealerInventoryActiveResponse>;
    /**
     * getDealerHeavyEquipmentId - Dealer by id
     *
     * Get a particular dealer's information by its id
    **/
    getDealerHeavyEquipmentId(req: operations.GetDealerHeavyEquipmentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDealerHeavyEquipmentIdResponse>;
    /**
     * getDealerMotorcycleId - Dealer by id
     *
     * Get a particular dealer's information by its id
    **/
    getDealerMotorcycleId(req: operations.GetDealerMotorcycleIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDealerMotorcycleIdResponse>;
    /**
     * getDealerRvId - Dealer by id
     *
     * Get a particular dealer's information by its id
    **/
    getDealerRvId(req: operations.GetDealerRvIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDealerRvIdResponse>;
    /**
     * getDealersHeavyEquipment - Find car dealers around
     *
     * The dealers API returns a list of dealers around a given point and radius.
    **/
    getDealersHeavyEquipment(req: operations.GetDealersHeavyEquipmentRequest, config?: AxiosRequestConfig): Promise<operations.GetDealersHeavyEquipmentResponse>;
    /**
     * getDealersMotorcycle - Find car dealers around
     *
     * The dealers API returns a list of dealers around a given point and radius.
    **/
    getDealersMotorcycle(req: operations.GetDealersMotorcycleRequest, config?: AxiosRequestConfig): Promise<operations.GetDealersMotorcycleResponse>;
    /**
     * getDealersRv - Find car dealers around
     *
     * The dealers API returns a list of dealers around a given point and radius.
    **/
    getDealersRv(req: operations.GetDealersRvRequest, config?: AxiosRequestConfig): Promise<operations.GetDealersRvResponse>;
    /**
     * getListingCarAuctionId - Listing by id
     *
     * Get a particular auction listing by its id
    **/
    getListingCarAuctionId(req: operations.GetListingCarAuctionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetListingCarAuctionIdResponse>;
    /**
     * getListingCarAuctionIdExtra - Long text Listings attributes for Listing with the given id
     *
     * Get listing options, features, seller comments
    **/
    getListingCarAuctionIdExtra(req: operations.GetListingCarAuctionIdExtraRequest, config?: AxiosRequestConfig): Promise<operations.GetListingCarAuctionIdExtraResponse>;
    /**
     * getListingCarAuctionIdMedia - Listing media by id
     *
     * Get listing media (photo, photos) by id
    **/
    getListingCarAuctionIdMedia(req: operations.GetListingCarAuctionIdMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetListingCarAuctionIdMediaResponse>;
    /**
     * getListingCarFsboId - Listing by id
     *
     * Get a particular private party listing by its id
    **/
    getListingCarFsboId(req: operations.GetListingCarFsboIdRequest, config?: AxiosRequestConfig): Promise<operations.GetListingCarFsboIdResponse>;
    /**
     * getListingCarFsboIdExtra - Long text Listings attributes for Listing with the given id
     *
     * Get listing options, features, seller comments
    **/
    getListingCarFsboIdExtra(req: operations.GetListingCarFsboIdExtraRequest, config?: AxiosRequestConfig): Promise<operations.GetListingCarFsboIdExtraResponse>;
    /**
     * getListingCarFsboIdMedia - Listing media by id
     *
     * Get listing media (photo, photos) by id
    **/
    getListingCarFsboIdMedia(req: operations.GetListingCarFsboIdMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetListingCarFsboIdMediaResponse>;
    /**
     * getListingCarIdExtra - Long text Listings attributes for Listing with the given id
     *
     * Get listing options, features, seller comments
    **/
    getListingCarIdExtra(req: operations.GetListingCarIdExtraRequest, config?: AxiosRequestConfig): Promise<operations.GetListingCarIdExtraResponse>;
    /**
     * getListingCarIdMedia - Listing media by id
     *
     * Get listing media (photo, photos) by id
    **/
    getListingCarIdMedia(req: operations.GetListingCarIdMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetListingCarIdMediaResponse>;
    /**
     * getListingHeavyEquipmentId - Heavy equipment listing by id
     *
     * Get a particular Heavy equipment listing by its id
    **/
    getListingHeavyEquipmentId(req: operations.GetListingHeavyEquipmentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetListingHeavyEquipmentIdResponse>;
    /**
     * getListingHeavyEquipmentIdExtra - Long text Heavy equipment Listings attributes for Listing with the given id
     *
     * Get Heavy equipment listing options, features, seller comments
    **/
    getListingHeavyEquipmentIdExtra(req: operations.GetListingHeavyEquipmentIdExtraRequest, config?: AxiosRequestConfig): Promise<operations.GetListingHeavyEquipmentIdExtraResponse>;
    /**
     * getListingHeavyEquipmentIdMedia - Listing media by id
     *
     * Get listing media (photo, photos) by id
    **/
    getListingHeavyEquipmentIdMedia(req: operations.GetListingHeavyEquipmentIdMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetListingHeavyEquipmentIdMediaResponse>;
    /**
     * getListingMotorcycleId - Motorcycle listing by id
     *
     * Get a particular Motorcycle listing by its id
    **/
    getListingMotorcycleId(req: operations.GetListingMotorcycleIdRequest, config?: AxiosRequestConfig): Promise<operations.GetListingMotorcycleIdResponse>;
    /**
     * getListingMotorcycleIdExtra - Long text Motorcycle Listings attributes for Listing with the given id
     *
     * Get Motorcycle listing options, features, seller comments
    **/
    getListingMotorcycleIdExtra(req: operations.GetListingMotorcycleIdExtraRequest, config?: AxiosRequestConfig): Promise<operations.GetListingMotorcycleIdExtraResponse>;
    /**
     * getListingMotorcycleIdMedia - Motorcycle listing media by id
     *
     * Get Motorcycle listing media (photo, photos) by id
    **/
    getListingMotorcycleIdMedia(req: operations.GetListingMotorcycleIdMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetListingMotorcycleIdMediaResponse>;
    /**
     * getListingRvId - RV listing by id
     *
     * Get a particular RV listing by its id
    **/
    getListingRvId(req: operations.GetListingRvIdRequest, config?: AxiosRequestConfig): Promise<operations.GetListingRvIdResponse>;
    /**
     * getListingRvIdExtra - Long text RV Listings attributes for Listing with the given id
     *
     * Get RV listing options, features, seller comments
    **/
    getListingRvIdExtra(req: operations.GetListingRvIdExtraRequest, config?: AxiosRequestConfig): Promise<operations.GetListingRvIdExtraResponse>;
    /**
     * getListingRvIdMedia - Listing media by id
     *
     * Get listing media (photo, photos) by id
    **/
    getListingRvIdMedia(req: operations.GetListingRvIdMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetListingRvIdMediaResponse>;
    /**
     * getSearchCarAuctionActive - Gets active auction car listings for the given search criteria
     *
     * This API produces a list of currently active auction cars from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows.
     *  The search API facilitates the following use cases -
     * 1. Search Cars around a given geo-point within a given radius
     * 2. Search cars for a specific year / make / model or combination of these
     * 3. Search cars matching multiple year, make, model combinatins in the same search request
     * 4. Filter results by most car specification attributes
     * 5. Search for similar cars by VIN or Taxonomy VIN
     * 6. Filter cars within a given price / miles / days on market (dom) range
     * 7. Specify a sort order for the results on price / miles / dom / listed date
     * 8. Search cars for a given City / State combination
     * 9. Get Facets to build the search drill downs
     * 10. Get Market averages for price/miles/dom for your search
    **/
    getSearchCarAuctionActive(req: operations.GetSearchCarAuctionActiveRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchCarAuctionActiveResponse>;
    /**
     * getSearchCarFsboActive - Gets active private party car listings for the given search criteria
     *
     * This API produces a list of currently active FSBO cars from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows.
     *  The search API facilitates the following use cases -
     * 1. Search Cars around a given geo-point within a given radius
     * 2. Search cars for a specific year / make / model or combination of these
     * 3. Search cars matching multiple year, make, model combinatins in the same search request
     * 4. Filter results by most car specification attributes
     * 5. Search for similar cars by VIN or Taxonomy VIN
     * 6. Filter cars within a given price / miles / days on market (dom) range
     * 7. Specify a sort order for the results on price / miles / dom / listed date
     * 8. Search cars for a given City / State combination
     * 9. Get Facets to build the search drill downs
     * 10. Get Market averages for price/miles/dom for your search
    **/
    getSearchCarFsboActive(req: operations.GetSearchCarFsboActiveRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchCarFsboActiveResponse>;
    /**
     * getSearchCarIncentiveOem - Gets oem incentive listings for the given search criteria
     *
     * This endpoint is the meat of the API and serves many purposes. This API produces a list of currently active oem incentive from the market for the given search criteria. The API results are limited to allow pagination upto 10000 rows.
     *  The search API facilitates the following use cases -
     * 1. Search Cars around a given geo-point within a given radius
     * 2. Search cars for a specific year / make / model or combination of these
     * 3. Search cars matching multiple year, make, model combinatins in the same search request
     * 4. Filter results by most car specification attributes
     * 5. Search for similar cars by VIN or Taxonomy VIN
     * 6. Filter cars within a given price / miles / days on market (dom) range
     * 7. Specify a sort order for the results on price / miles / dom / listed date
     * 8. Search cars for a given City / State combination
     * 9. Get Facets to build the search drill downs
     * 10. Get Market averages for price/miles/dom for your search
    **/
    getSearchCarIncentiveOem(req: operations.GetSearchCarIncentiveOemRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchCarIncentiveOemResponse>;
    /**
     * getSearchCarRecents - Gets Recent car listings for the given search criteria
     *
     * This API produces a list of recently active (past 90 days) cars from the market for the given search criteria
    **/
    getSearchCarRecents(req: operations.GetSearchCarRecentsRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchCarRecentsResponse>;
    /**
     * getSearchHeavyEquipmentActive - Gets active heavy equipment listings for the given search criteria
     *
     * This endpoint provides search on heavy equipment inventory. This API produces a list of currently active heavy equipments from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows.
     *  The search API facilitates the following use cases -
     * 1. Search heavy equipments around a given geo-point within a given radius
     * 2. Search heavy equipments for a specific year / make / model or combination of these
     * 3. Search heavy equipments matching multiple year, make, model combinatins in the same search request
     * 4. Filter results by most heavy equipment specification attributes
     * 5. Filter heavy equipments within a given price / miles range
     * 6. Specify a sort order for the results on price / miles / listed date
     * 7. Search heavy equipments for a given City / State combination
     * 8. Get Facets to build the search drill downs
     * 9. Get Market averages for price/miles for your search
    **/
    getSearchHeavyEquipmentActive(req: operations.GetSearchHeavyEquipmentActiveRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchHeavyEquipmentActiveResponse>;
    /**
     * getSearchHeavyEquipmentAutoComplete - API for auto-completion of inputs
     *
     * Auto-complete the inputs of your end users
    **/
    getSearchHeavyEquipmentAutoComplete(req: operations.GetSearchHeavyEquipmentAutoCompleteRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchHeavyEquipmentAutoCompleteResponse>;
    /**
     * getSearchMotorcycleActive - Gets active motorcycle listings for the given search criteria
     *
     * This endpoint provides search on motorcycle inventory. This API produces a list of currently active motorcycles from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows.
     *  The search API facilitates the following use cases -
     * 1. Search motorcycles around a given geo-point within a given radius
     * 2. Search motorcycles for a specific year / make / model or combination of these
     * 3. Search motorcycles matching multiple year, make, model combinatins in the same search request
     * 4. Filter results by most motorcycle specification attributes
     * 5. Search for similar motorcycles by VIN or Taxonomy VIN
     * 6. Filter motorcycles within a given price / miles range
     * 7. Specify a sort order for the results on price / miles / listed date
     * 8. Search motorcycles for a given City / State combination
     * 9. Get Facets to build the search drill downs
     * 10. Get Market averages for price/miles for your search
    **/
    getSearchMotorcycleActive(req: operations.GetSearchMotorcycleActiveRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchMotorcycleActiveResponse>;
    /**
     * getSearchMotorcycleAutoComplete - API for auto-completion of inputs
     *
     * Auto-complete the inputs of your end users
    **/
    getSearchMotorcycleAutoComplete(req: operations.GetSearchMotorcycleAutoCompleteRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchMotorcycleAutoCompleteResponse>;
    /**
     * getSearchRvActive - Gets active RV listings for the given search criteria
     *
     * This endpoint provides search on RV inventory. This API produces a list of currently active RV from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows.
     *  The search API facilitates the following use cases -
     * 1. Search RV around a given geo-point within a given radius
     * 2. Search RV for a specific year / make / model or combination of these
     * 3. Search RV matching multiple year, make, model combinatins in the same search request
     * 4. Filter results by most RV specification attributes
     * 5. Filter RV within a given price / miles range
     * 6. Specify a sort order for the results on price / miles / listed date
     * 7. Search RV for a given City / State combination
     * 8. Get Facets to build the search drill downs
     * 9. Get Market averages for price/miles for your search
    **/
    getSearchRvActive(req: operations.GetSearchRvActiveRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchRvActiveResponse>;
    /**
     * getSearchRvAutoComplete - API for auto-completion of inputs
     *
     * Auto-complete the inputs of your end users
    **/
    getSearchRvAutoComplete(req: operations.GetSearchRvAutoCompleteRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchRvAutoCompleteResponse>;
    /**
     * getSpecsCarAutoComplete - API for auto-completion of inputs based on taxonomy
     *
     * Auto-complete the inputs of your end users, not from active set but from taxonomy (decoder database)
    **/
    getSpecsCarAutoComplete(req: operations.GetSpecsCarAutoCompleteRequest, config?: AxiosRequestConfig): Promise<operations.GetSpecsCarAutoCompleteResponse>;
    /**
     * autoComplete - API for auto-completion of inputs
     *
     * Auto-complete the inputs of your end users
    **/
    autoComplete(req: operations.AutoCompleteRequest, config?: AxiosRequestConfig): Promise<operations.AutoCompleteResponse>;
    /**
     * crmCheck - CRM check of a particular vin
     *
     * Check whether particular vin has had a listing after stipulated date or not
    **/
    crmCheck(req: operations.CrmCheckRequest, config?: AxiosRequestConfig): Promise<operations.CrmCheckResponse>;
    /**
     * dealerSearch - Find car dealers around
     *
     * The dealers API returns a list of dealers around a given point and radius.
    **/
    dealerSearch(req: operations.DealerSearchRequest, config?: AxiosRequestConfig): Promise<operations.DealerSearchResponse>;
    /**
     * decode - VIN Decoder
     *
     * Get the basic information on specifications for a car identified by a valid VIN
    **/
    decode(req: operations.DecodeRequest, config?: AxiosRequestConfig): Promise<operations.DecodeResponse>;
    /**
     * decodeViaEpi - EPI VIN Decoder
     *
     * Get the basic information on specifications for a car identified by a valid VIN from EPI's decoder
    **/
    decodeViaEpi(req: operations.DecodeViaEpiRequest, config?: AxiosRequestConfig): Promise<operations.DecodeViaEpiResponse>;
    /**
     * getCachedImage - Fetch cached image
     *
     * Fetch the cached car image
    **/
    getCachedImage(req: operations.GetCachedImageRequest, config?: AxiosRequestConfig): Promise<operations.GetCachedImageResponse>;
    /**
     * getCarHistory - Get a cars online listing history
     *
     * The history API returns online listing history for a car identified by its VIN. History listings are sorted in the descending order of the listing date / last seen date
    **/
    getCarHistory(req: operations.GetCarHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetCarHistoryResponse>;
    /**
     * getDailyStats - Price, Miles and Days on Market stats
     *
     * National, state and city level stats for price, miles and dom
    **/
    getDailyStats(req: operations.GetDailyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetDailyStatsResponse>;
    /**
     * getDealer - Dealer by id
     *
     * Get a particular dealer's information by its id
    **/
    getDealer(req: operations.GetDealerRequest, config?: AxiosRequestConfig): Promise<operations.GetDealerResponse>;
    /**
     * getListing - Listing by id
     *
     * Get a particular dealer listing by its id
    **/
    getListing(req: operations.GetListingRequest, config?: AxiosRequestConfig): Promise<operations.GetListingResponse>;
    /**
     * getMds - Market Days Supply
     *
     * Get the basic information on specifications for a car identified by a valid VIN
    **/
    getMds(req: operations.GetMdsRequest, config?: AxiosRequestConfig): Promise<operations.GetMdsResponse>;
    /**
     * getPopularCars - Get make model wise top 50 popular cars on national, state, city level
     *
     * Get make model wise top 50 popular cars on national, state, city level
    **/
    getPopularCars(req: operations.GetPopularCarsRequest, config?: AxiosRequestConfig): Promise<operations.GetPopularCarsResponse>;
    /**
     * getRecallHistory - Recall info by vin
     *
     * Get a particular recall information for a vin
    **/
    getRecallHistory(req: operations.GetRecallHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetRecallHistoryResponse>;
    /**
     * getSalesCount - Get sales count by make, model, year, trim or taxonomy vin
     *
     * Get a sales count for city, state or national level by make, model, year, trim or taxonomy vin
    **/
    getSalesCount(req: operations.GetSalesCountRequest, config?: AxiosRequestConfig): Promise<operations.GetSalesCountResponse>;
    /**
     * getTaxonomyTerms - API for getting terms from taxonomy
     *
     * Facets on taxonomy
    **/
    getTaxonomyTerms(req: operations.GetTaxonomyTermsRequest, config?: AxiosRequestConfig): Promise<operations.GetTaxonomyTermsResponse>;
    /**
     * rankCar - Compute relative rank for car listings.
     *
     * Computer rank for car listings based on inputs provided.Weights for ranking parameters can also be provided.
    **/
    rankCar(req: operations.RankCarRequest, config?: AxiosRequestConfig): Promise<operations.RankCarResponse>;
    /**
     * search - Gets active car listings for the given search criteria
     *
     * This endpoint is the meat of the API and serves many purposes. This API produces a list of currently active cars from the market for the given search criteria. The API results are limited to allow pagination upto 10000 rows.
     *  The search API facilitates the following use cases -
     * 1. Search Cars around a given geo-point within a given radius
     * 2. Search cars for a specific year / make / model or combination of these
     * 3. Search cars matching multiple year, make, model combinatins in the same search request
     * 4. Filter results by most car specification attributes
     * 5. Search for similar cars by VIN or Taxonomy VIN
     * 6. Filter cars within a given price / miles / days on market (dom) range
     * 7. Specify a sort order for the results on price / miles / dom / listed date
     * 8. Search cars for a given City / State combination
     * 9. Get Facets to build the search drill downs
     * 10. Get Market averages for price/miles/dom for your search
    **/
    search(req: operations.SearchRequest, config?: AxiosRequestConfig): Promise<operations.SearchResponse>;
    /**
     * searchAndRankCar - Compute relative rank for car listings.
     *
     * Computer rank for car listings based on inputs provided.Weights for ranking parameters can also be provided.
    **/
    searchAndRankCar(req: operations.SearchAndRankCarRequest, config?: AxiosRequestConfig): Promise<operations.SearchAndRankCarResponse>;
}
export {};

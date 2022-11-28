import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://geo.{region}.amazonaws.com", "https://geo.{region}.amazonaws.com", "http://geo.{region}.amazonaws.com.cn", "https://geo.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * associateTrackerConsumer - <p>Creates an association between a geofence collection and a tracker resource. This allows the tracker resource to communicate location data to the linked geofence collection. </p> <p>You can associate up to five geofence collections to each tracker resource.</p> <note> <p>Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.</p> </note>
    **/
    associateTrackerConsumer(req: operations.AssociateTrackerConsumerRequest, config?: AxiosRequestConfig): Promise<operations.AssociateTrackerConsumerResponse>;
    /**
     * batchDeleteDevicePositionHistory - Deletes the position history of one or more devices from a tracker resource.
    **/
    batchDeleteDevicePositionHistory(req: operations.BatchDeleteDevicePositionHistoryRequest, config?: AxiosRequestConfig): Promise<operations.BatchDeleteDevicePositionHistoryResponse>;
    /**
     * batchDeleteGeofence - <p>Deletes a batch of geofences from a geofence collection.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
    **/
    batchDeleteGeofence(req: operations.BatchDeleteGeofenceRequest, config?: AxiosRequestConfig): Promise<operations.BatchDeleteGeofenceResponse>;
    /**
     * batchEvaluateGeofences - <p>Evaluates device positions against the geofence geometries from a given geofence collection.</p> <p>This operation always returns an empty response because geofences are asynchronously evaluated. The evaluation determines if the device has entered or exited a geofenced area, and then publishes one of the following events to Amazon EventBridge:</p> <ul> <li> <p> <code>ENTER</code> if Amazon Location determines that the tracked device has entered a geofenced area.</p> </li> <li> <p> <code>EXIT</code> if Amazon Location determines that the tracked device has exited a geofenced area.</p> </li> </ul> <note> <p>The last geofence that a device was observed within is tracked for 30 days after the most recent device position update.</p> </note>
    **/
    batchEvaluateGeofences(req: operations.BatchEvaluateGeofencesRequest, config?: AxiosRequestConfig): Promise<operations.BatchEvaluateGeofencesResponse>;
    /**
     * batchGetDevicePosition - Lists the latest device positions for requested devices.
    **/
    batchGetDevicePosition(req: operations.BatchGetDevicePositionRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetDevicePositionResponse>;
    /**
     * batchPutGeofence - A batch request for storing geofence geometries into a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request.
    **/
    batchPutGeofence(req: operations.BatchPutGeofenceRequest, config?: AxiosRequestConfig): Promise<operations.BatchPutGeofenceResponse>;
    /**
     * batchUpdateDevicePosition - <p>Uploads position update data for one or more devices to a tracker resource. Amazon Location uses the data when reporting the last known device position and position history.</p> <note> <p>Only one position update is stored per sample time. Location data is sampled at a fixed rate of one position per 30-second interval and retained for 30 days before it's deleted.</p> </note>
    **/
    batchUpdateDevicePosition(req: operations.BatchUpdateDevicePositionRequest, config?: AxiosRequestConfig): Promise<operations.BatchUpdateDevicePositionResponse>;
    /**
     * calculateRoute - <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html">Calculates a route</a> given the following required parameters: <code>DeparturePostiton</code> and <code>DestinationPosition</code>. Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a> </p> <p>By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating the route.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html#departure-time">Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartureNow</code>. This calculates a route based on predictive traffic data at the given time. </p> <note> <p>You can't specify both <code>DepartureTime</code> and <code>DepartureNow</code> in a single request. Specifying both parameters returns an error message.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html#travel-mode">Specifying a travel mode</a> using TravelMode. This lets you specify an additional route preference such as <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> </li> </ul> <p> </p>
    **/
    calculateRoute(req: operations.CalculateRouteRequest, config?: AxiosRequestConfig): Promise<operations.CalculateRouteResponse>;
    /**
     * createGeofenceCollection - Creates a geofence collection, which manages and stores geofences.
    **/
    createGeofenceCollection(req: operations.CreateGeofenceCollectionRequest, config?: AxiosRequestConfig): Promise<operations.CreateGeofenceCollectionResponse>;
    /**
     * createMap - Creates a map resource in your AWS account, which provides map tiles of different styles sourced from global location data providers.
    **/
    createMap(req: operations.CreateMapRequest, config?: AxiosRequestConfig): Promise<operations.CreateMapResponse>;
    /**
     * createPlaceIndex - Creates a place index resource in your AWS account, which supports functions with geospatial data sourced from your chosen data provider.
    **/
    createPlaceIndex(req: operations.CreatePlaceIndexRequest, config?: AxiosRequestConfig): Promise<operations.CreatePlaceIndexResponse>;
    /**
     * createRouteCalculator - <p>Creates a route calculator resource in your AWS account.</p> <p>You can send requests to a route calculator resource to estimate travel time, distance, and get directions. A route calculator sources traffic and road network data from your chosen data provider.</p>
    **/
    createRouteCalculator(req: operations.CreateRouteCalculatorRequest, config?: AxiosRequestConfig): Promise<operations.CreateRouteCalculatorResponse>;
    /**
     * createTracker - Creates a tracker resource in your AWS account, which lets you retrieve current and historical location of devices.
    **/
    createTracker(req: operations.CreateTrackerRequest, config?: AxiosRequestConfig): Promise<operations.CreateTrackerResponse>;
    /**
     * deleteGeofenceCollection - <p>Deletes a geofence collection from your AWS account.</p> <note> <p>This operation deletes the resource permanently. If the geofence collection is the target of a tracker resource, the devices will no longer be monitored.</p> </note>
    **/
    deleteGeofenceCollection(req: operations.DeleteGeofenceCollectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGeofenceCollectionResponse>;
    /**
     * deleteMap - <p>Deletes a map resource from your AWS account.</p> <note> <p>This operation deletes the resource permanently. If the map is being used in an application, the map may not render.</p> </note>
    **/
    deleteMap(req: operations.DeleteMapRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMapResponse>;
    /**
     * deletePlaceIndex - <p>Deletes a place index resource from your AWS account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
    **/
    deletePlaceIndex(req: operations.DeletePlaceIndexRequest, config?: AxiosRequestConfig): Promise<operations.DeletePlaceIndexResponse>;
    /**
     * deleteRouteCalculator - <p>Deletes a route calculator resource from your AWS account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
    **/
    deleteRouteCalculator(req: operations.DeleteRouteCalculatorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRouteCalculatorResponse>;
    /**
     * deleteTracker - <p>Deletes a tracker resource from your AWS account.</p> <note> <p>This operation deletes the resource permanently. If the tracker resource is in use, you may encounter an error. Make sure that the target resource isn't a dependency for your applications.</p> </note>
    **/
    deleteTracker(req: operations.DeleteTrackerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTrackerResponse>;
    /**
     * describeGeofenceCollection - Retrieves the geofence collection details.
    **/
    describeGeofenceCollection(req: operations.DescribeGeofenceCollectionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeGeofenceCollectionResponse>;
    /**
     * describeMap - Retrieves the map resource details.
    **/
    describeMap(req: operations.DescribeMapRequest, config?: AxiosRequestConfig): Promise<operations.DescribeMapResponse>;
    /**
     * describePlaceIndex - Retrieves the place index resource details.
    **/
    describePlaceIndex(req: operations.DescribePlaceIndexRequest, config?: AxiosRequestConfig): Promise<operations.DescribePlaceIndexResponse>;
    /**
     * describeRouteCalculator - Retrieves the route calculator resource details.
    **/
    describeRouteCalculator(req: operations.DescribeRouteCalculatorRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRouteCalculatorResponse>;
    /**
     * describeTracker - Retrieves the tracker resource details.
    **/
    describeTracker(req: operations.DescribeTrackerRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTrackerResponse>;
    /**
     * disassociateTrackerConsumer - <p>Removes the association between a tracker resource and a geofence collection.</p> <note> <p>Once you unlink a tracker resource from a geofence collection, the tracker positions will no longer be automatically evaluated against geofences.</p> </note>
    **/
    disassociateTrackerConsumer(req: operations.DisassociateTrackerConsumerRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateTrackerConsumerResponse>;
    /**
     * getDevicePosition - <p>Retrieves a device's most recent position according to its sample time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>
    **/
    getDevicePosition(req: operations.GetDevicePositionRequest, config?: AxiosRequestConfig): Promise<operations.GetDevicePositionResponse>;
    /**
     * getDevicePositionHistory - <p>Retrieves the device position history from a tracker resource within a specified range of time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>
    **/
    getDevicePositionHistory(req: operations.GetDevicePositionHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetDevicePositionHistoryResponse>;
    /**
     * getGeofence - Retrieves the geofence details from a geofence collection.
    **/
    getGeofence(req: operations.GetGeofenceRequest, config?: AxiosRequestConfig): Promise<operations.GetGeofenceResponse>;
    /**
     * getMapGlyphs - Retrieves glyphs used to display labels on a map.
    **/
    getMapGlyphs(req: operations.GetMapGlyphsRequest, config?: AxiosRequestConfig): Promise<operations.GetMapGlyphsResponse>;
    /**
     * getMapSprites - Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG image paired with a JSON document describing the offsets of individual icons that will be displayed on a rendered map.
    **/
    getMapSprites(req: operations.GetMapSpritesRequest, config?: AxiosRequestConfig): Promise<operations.GetMapSpritesResponse>;
    /**
     * getMapStyleDescriptor - <p>Retrieves the map style descriptor from a map resource. </p> <p>The style descriptor contains speciﬁcations on how features render on a map. For example, what data to display, what order to display the data in, and the style for the data. Style descriptors follow the Mapbox Style Specification.</p>
    **/
    getMapStyleDescriptor(req: operations.GetMapStyleDescriptorRequest, config?: AxiosRequestConfig): Promise<operations.GetMapStyleDescriptorResponse>;
    /**
     * getMapTile - <p>Retrieves a vector data tile from the map resource. Map tiles are used by clients to render a map. they're addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level. </p> <p>The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0) will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).</p>
    **/
    getMapTile(req: operations.GetMapTileRequest, config?: AxiosRequestConfig): Promise<operations.GetMapTileResponse>;
    /**
     * listDevicePositions - A batch request to retrieve all device positions.
    **/
    listDevicePositions(req: operations.ListDevicePositionsRequest, config?: AxiosRequestConfig): Promise<operations.ListDevicePositionsResponse>;
    /**
     * listGeofenceCollections - Lists geofence collections in your AWS account.
    **/
    listGeofenceCollections(req: operations.ListGeofenceCollectionsRequest, config?: AxiosRequestConfig): Promise<operations.ListGeofenceCollectionsResponse>;
    /**
     * listGeofences - Lists geofences stored in a given geofence collection.
    **/
    listGeofences(req: operations.ListGeofencesRequest, config?: AxiosRequestConfig): Promise<operations.ListGeofencesResponse>;
    /**
     * listMaps - Lists map resources in your AWS account.
    **/
    listMaps(req: operations.ListMapsRequest, config?: AxiosRequestConfig): Promise<operations.ListMapsResponse>;
    /**
     * listPlaceIndexes - Lists place index resources in your AWS account.
    **/
    listPlaceIndexes(req: operations.ListPlaceIndexesRequest, config?: AxiosRequestConfig): Promise<operations.ListPlaceIndexesResponse>;
    /**
     * listRouteCalculators - Lists route calculator resources in your AWS account.
    **/
    listRouteCalculators(req: operations.ListRouteCalculatorsRequest, config?: AxiosRequestConfig): Promise<operations.ListRouteCalculatorsResponse>;
    /**
     * listTagsForResource - Returns a list of tags that are applied to the specified Amazon Location resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * listTrackerConsumers - Lists geofence collections currently associated to the given tracker resource.
    **/
    listTrackerConsumers(req: operations.ListTrackerConsumersRequest, config?: AxiosRequestConfig): Promise<operations.ListTrackerConsumersResponse>;
    /**
     * listTrackers - Lists tracker resources in your AWS account.
    **/
    listTrackers(req: operations.ListTrackersRequest, config?: AxiosRequestConfig): Promise<operations.ListTrackersResponse>;
    /**
     * putGeofence - Stores a geofence geometry in a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request.
    **/
    putGeofence(req: operations.PutGeofenceRequest, config?: AxiosRequestConfig): Promise<operations.PutGeofenceResponse>;
    /**
     * searchPlaceIndexForPosition - Reverse geocodes a given coordinate and returns a legible address. Allows you to search for Places or points of interest near a given position.
    **/
    searchPlaceIndexForPosition(req: operations.SearchPlaceIndexForPositionRequest, config?: AxiosRequestConfig): Promise<operations.SearchPlaceIndexForPositionResponse>;
    /**
     * searchPlaceIndexForText - <p>Geocodes free-form text, such as an address, name, city, or region to allow you to search for Places or points of interest. </p> <p>Includes the option to apply additional parameters to narrow your list of results.</p> <note> <p>You can search for places near a given position using <code>BiasPosition</code>, or filter results within a bounding box using <code>FilterBBox</code>. Providing both parameters simultaneously returns an error.</p> </note>
    **/
    searchPlaceIndexForText(req: operations.SearchPlaceIndexForTextRequest, config?: AxiosRequestConfig): Promise<operations.SearchPlaceIndexForTextResponse>;
    /**
     * tagResource - <p>Assigns one or more tags (key-value pairs) to the specified Amazon Location Service resource.</p> <pre><code> &lt;p&gt;Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.&lt;/p&gt; &lt;p&gt;You can use the &lt;code&gt;TagResource&lt;/code&gt; operation with an Amazon Location Service resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the tags already associated with the resource. If you specify a tag key that's already associated with the resource, the new tag value that you specify replaces the previous value for that tag. &lt;/p&gt; &lt;p&gt;You can associate up to 50 tags with a resource.&lt;/p&gt; </code></pre>
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes one or more tags from the specified Amazon Location resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateGeofenceCollection - Updates the specified properties of a given geofence collection.
    **/
    updateGeofenceCollection(req: operations.UpdateGeofenceCollectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGeofenceCollectionResponse>;
    /**
     * updateMap - Updates the specified properties of a given map resource.
    **/
    updateMap(req: operations.UpdateMapRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMapResponse>;
    /**
     * updatePlaceIndex - Updates the specified properties of a given place index resource.
    **/
    updatePlaceIndex(req: operations.UpdatePlaceIndexRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePlaceIndexResponse>;
    /**
     * updateRouteCalculator - Updates the specified properties for a given route calculator resource.
    **/
    updateRouteCalculator(req: operations.UpdateRouteCalculatorRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRouteCalculatorResponse>;
    /**
     * updateTracker - Updates the specified properties of a given tracker resource.
    **/
    updateTracker(req: operations.UpdateTrackerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTrackerResponse>;
}
export {};

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
import { AssociateTrackerConsumerRequest, AssociateTrackerConsumerResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AssociateTrackerConsumerRequest = {
  pathParams: {
    trackerName: "quis",
  },
  headers: {
    xAmzAlgorithm: "est",
    xAmzContentSha256: "dolorum",
    xAmzCredential: "ut",
    xAmzDate: "veniam",
    xAmzSecurityToken: "est",
    xAmzSignature: "blanditiis",
    xAmzSignedHeaders: "aliquid",
  },
  request: {
    consumerArn: "asperiores",
  },
};

sdk.sdk.associateTrackerConsumer(req).then((res: AssociateTrackerConsumerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associateTrackerConsumer` - <p>Creates an association between a geofence collection and a tracker resource. This allows the tracker resource to communicate location data to the linked geofence collection. </p> <p>You can associate up to five geofence collections to each tracker resource.</p> <note> <p>Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.</p> </note>
* `batchDeleteDevicePositionHistory` - Deletes the position history of one or more devices from a tracker resource.
* `batchDeleteGeofence` - <p>Deletes a batch of geofences from a geofence collection.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
* `batchEvaluateGeofences` - <p>Evaluates device positions against the geofence geometries from a given geofence collection.</p> <p>This operation always returns an empty response because geofences are asynchronously evaluated. The evaluation determines if the device has entered or exited a geofenced area, and then publishes one of the following events to Amazon EventBridge:</p> <ul> <li> <p> <code>ENTER</code> if Amazon Location determines that the tracked device has entered a geofenced area.</p> </li> <li> <p> <code>EXIT</code> if Amazon Location determines that the tracked device has exited a geofenced area.</p> </li> </ul> <note> <p>The last geofence that a device was observed within is tracked for 30 days after the most recent device position update.</p> </note>
* `batchGetDevicePosition` - Lists the latest device positions for requested devices.
* `batchPutGeofence` - A batch request for storing geofence geometries into a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request.
* `batchUpdateDevicePosition` - <p>Uploads position update data for one or more devices to a tracker resource. Amazon Location uses the data when reporting the last known device position and position history.</p> <note> <p>Only one position update is stored per sample time. Location data is sampled at a fixed rate of one position per 30-second interval and retained for 30 days before it's deleted.</p> </note>
* `calculateRoute` - <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html">Calculates a route</a> given the following required parameters: <code>DeparturePostiton</code> and <code>DestinationPosition</code>. Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a> </p> <p>By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating the route.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html#departure-time">Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartureNow</code>. This calculates a route based on predictive traffic data at the given time. </p> <note> <p>You can't specify both <code>DepartureTime</code> and <code>DepartureNow</code> in a single request. Specifying both parameters returns an error message.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html#travel-mode">Specifying a travel mode</a> using TravelMode. This lets you specify an additional route preference such as <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> </li> </ul> <p> </p>
* `createGeofenceCollection` - Creates a geofence collection, which manages and stores geofences.
* `createMap` - Creates a map resource in your AWS account, which provides map tiles of different styles sourced from global location data providers.
* `createPlaceIndex` - Creates a place index resource in your AWS account, which supports functions with geospatial data sourced from your chosen data provider.
* `createRouteCalculator` - <p>Creates a route calculator resource in your AWS account.</p> <p>You can send requests to a route calculator resource to estimate travel time, distance, and get directions. A route calculator sources traffic and road network data from your chosen data provider.</p>
* `createTracker` - Creates a tracker resource in your AWS account, which lets you retrieve current and historical location of devices.
* `deleteGeofenceCollection` - <p>Deletes a geofence collection from your AWS account.</p> <note> <p>This operation deletes the resource permanently. If the geofence collection is the target of a tracker resource, the devices will no longer be monitored.</p> </note>
* `deleteMap` - <p>Deletes a map resource from your AWS account.</p> <note> <p>This operation deletes the resource permanently. If the map is being used in an application, the map may not render.</p> </note>
* `deletePlaceIndex` - <p>Deletes a place index resource from your AWS account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
* `deleteRouteCalculator` - <p>Deletes a route calculator resource from your AWS account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
* `deleteTracker` - <p>Deletes a tracker resource from your AWS account.</p> <note> <p>This operation deletes the resource permanently. If the tracker resource is in use, you may encounter an error. Make sure that the target resource isn't a dependency for your applications.</p> </note>
* `describeGeofenceCollection` - Retrieves the geofence collection details.
* `describeMap` - Retrieves the map resource details.
* `describePlaceIndex` - Retrieves the place index resource details.
* `describeRouteCalculator` - Retrieves the route calculator resource details.
* `describeTracker` - Retrieves the tracker resource details.
* `disassociateTrackerConsumer` - <p>Removes the association between a tracker resource and a geofence collection.</p> <note> <p>Once you unlink a tracker resource from a geofence collection, the tracker positions will no longer be automatically evaluated against geofences.</p> </note>
* `getDevicePosition` - <p>Retrieves a device's most recent position according to its sample time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>
* `getDevicePositionHistory` - <p>Retrieves the device position history from a tracker resource within a specified range of time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>
* `getGeofence` - Retrieves the geofence details from a geofence collection.
* `getMapGlyphs` - Retrieves glyphs used to display labels on a map.
* `getMapSprites` - Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG image paired with a JSON document describing the offsets of individual icons that will be displayed on a rendered map.
* `getMapStyleDescriptor` - <p>Retrieves the map style descriptor from a map resource. </p> <p>The style descriptor contains speciﬁcations on how features render on a map. For example, what data to display, what order to display the data in, and the style for the data. Style descriptors follow the Mapbox Style Specification.</p>
* `getMapTile` - <p>Retrieves a vector data tile from the map resource. Map tiles are used by clients to render a map. they're addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level. </p> <p>The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0) will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).</p>
* `listDevicePositions` - A batch request to retrieve all device positions.
* `listGeofenceCollections` - Lists geofence collections in your AWS account.
* `listGeofences` - Lists geofences stored in a given geofence collection.
* `listMaps` - Lists map resources in your AWS account.
* `listPlaceIndexes` - Lists place index resources in your AWS account.
* `listRouteCalculators` - Lists route calculator resources in your AWS account.
* `listTagsForResource` - Returns a list of tags that are applied to the specified Amazon Location resource.
* `listTrackerConsumers` - Lists geofence collections currently associated to the given tracker resource.
* `listTrackers` - Lists tracker resources in your AWS account.
* `putGeofence` - Stores a geofence geometry in a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request. 
* `searchPlaceIndexForPosition` - Reverse geocodes a given coordinate and returns a legible address. Allows you to search for Places or points of interest near a given position.
* `searchPlaceIndexForText` - <p>Geocodes free-form text, such as an address, name, city, or region to allow you to search for Places or points of interest. </p> <p>Includes the option to apply additional parameters to narrow your list of results.</p> <note> <p>You can search for places near a given position using <code>BiasPosition</code>, or filter results within a bounding box using <code>FilterBBox</code>. Providing both parameters simultaneously returns an error.</p> </note>
* `tagResource` - <p>Assigns one or more tags (key-value pairs) to the specified Amazon Location Service resource.</p> <pre><code> &lt;p&gt;Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.&lt;/p&gt; &lt;p&gt;You can use the &lt;code&gt;TagResource&lt;/code&gt; operation with an Amazon Location Service resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the tags already associated with the resource. If you specify a tag key that's already associated with the resource, the new tag value that you specify replaces the previous value for that tag. &lt;/p&gt; &lt;p&gt;You can associate up to 50 tags with a resource.&lt;/p&gt; </code></pre>
* `untagResource` - Removes one or more tags from the specified Amazon Location resource.
* `updateGeofenceCollection` - Updates the specified properties of a given geofence collection.
* `updateMap` - Updates the specified properties of a given map resource.
* `updatePlaceIndex` - Updates the specified properties of a given place index resource.
* `updateRouteCalculator` - Updates the specified properties for a given route calculator resource.
* `updateTracker` - Updates the specified properties of a given tracker resource.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

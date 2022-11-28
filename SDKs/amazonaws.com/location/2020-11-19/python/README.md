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
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AssociateTrackerConsumerRequest(
    path_params=operations.AssociateTrackerConsumerPathParams(
        tracker_name="quis",
    ),
    headers=operations.AssociateTrackerConsumerHeaders(
        x_amz_algorithm="est",
        x_amz_content_sha256="dolorum",
        x_amz_credential="ut",
        x_amz_date="veniam",
        x_amz_security_token="est",
        x_amz_signature="blanditiis",
        x_amz_signed_headers="aliquid",
    ),
    request=operations.AssociateTrackerConsumerRequestBody(
        consumer_arn="asperiores",
    ),
)
    
res = s.sdk.associate_tracker_consumer(req)

if res.associate_tracker_consumer_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associate_tracker_consumer` - <p>Creates an association between a geofence collection and a tracker resource. This allows the tracker resource to communicate location data to the linked geofence collection. </p> <p>You can associate up to five geofence collections to each tracker resource.</p> <note> <p>Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.</p> </note>
* `batch_delete_device_position_history` - Deletes the position history of one or more devices from a tracker resource.
* `batch_delete_geofence` - <p>Deletes a batch of geofences from a geofence collection.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
* `batch_evaluate_geofences` - <p>Evaluates device positions against the geofence geometries from a given geofence collection.</p> <p>This operation always returns an empty response because geofences are asynchronously evaluated. The evaluation determines if the device has entered or exited a geofenced area, and then publishes one of the following events to Amazon EventBridge:</p> <ul> <li> <p> <code>ENTER</code> if Amazon Location determines that the tracked device has entered a geofenced area.</p> </li> <li> <p> <code>EXIT</code> if Amazon Location determines that the tracked device has exited a geofenced area.</p> </li> </ul> <note> <p>The last geofence that a device was observed within is tracked for 30 days after the most recent device position update.</p> </note>
* `batch_get_device_position` - Lists the latest device positions for requested devices.
* `batch_put_geofence` - A batch request for storing geofence geometries into a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request.
* `batch_update_device_position` - <p>Uploads position update data for one or more devices to a tracker resource. Amazon Location uses the data when reporting the last known device position and position history.</p> <note> <p>Only one position update is stored per sample time. Location data is sampled at a fixed rate of one position per 30-second interval and retained for 30 days before it's deleted.</p> </note>
* `calculate_route` - <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html">Calculates a route</a> given the following required parameters: <code>DeparturePostiton</code> and <code>DestinationPosition</code>. Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a> </p> <p>By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating the route.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html#departure-time">Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartureNow</code>. This calculates a route based on predictive traffic data at the given time. </p> <note> <p>You can't specify both <code>DepartureTime</code> and <code>DepartureNow</code> in a single request. Specifying both parameters returns an error message.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html#travel-mode">Specifying a travel mode</a> using TravelMode. This lets you specify an additional route preference such as <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> </li> </ul> <p> </p>
* `create_geofence_collection` - Creates a geofence collection, which manages and stores geofences.
* `create_map` - Creates a map resource in your AWS account, which provides map tiles of different styles sourced from global location data providers.
* `create_place_index` - Creates a place index resource in your AWS account, which supports functions with geospatial data sourced from your chosen data provider.
* `create_route_calculator` - <p>Creates a route calculator resource in your AWS account.</p> <p>You can send requests to a route calculator resource to estimate travel time, distance, and get directions. A route calculator sources traffic and road network data from your chosen data provider.</p>
* `create_tracker` - Creates a tracker resource in your AWS account, which lets you retrieve current and historical location of devices.
* `delete_geofence_collection` - <p>Deletes a geofence collection from your AWS account.</p> <note> <p>This operation deletes the resource permanently. If the geofence collection is the target of a tracker resource, the devices will no longer be monitored.</p> </note>
* `delete_map` - <p>Deletes a map resource from your AWS account.</p> <note> <p>This operation deletes the resource permanently. If the map is being used in an application, the map may not render.</p> </note>
* `delete_place_index` - <p>Deletes a place index resource from your AWS account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
* `delete_route_calculator` - <p>Deletes a route calculator resource from your AWS account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
* `delete_tracker` - <p>Deletes a tracker resource from your AWS account.</p> <note> <p>This operation deletes the resource permanently. If the tracker resource is in use, you may encounter an error. Make sure that the target resource isn't a dependency for your applications.</p> </note>
* `describe_geofence_collection` - Retrieves the geofence collection details.
* `describe_map` - Retrieves the map resource details.
* `describe_place_index` - Retrieves the place index resource details.
* `describe_route_calculator` - Retrieves the route calculator resource details.
* `describe_tracker` - Retrieves the tracker resource details.
* `disassociate_tracker_consumer` - <p>Removes the association between a tracker resource and a geofence collection.</p> <note> <p>Once you unlink a tracker resource from a geofence collection, the tracker positions will no longer be automatically evaluated against geofences.</p> </note>
* `get_device_position` - <p>Retrieves a device's most recent position according to its sample time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>
* `get_device_position_history` - <p>Retrieves the device position history from a tracker resource within a specified range of time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>
* `get_geofence` - Retrieves the geofence details from a geofence collection.
* `get_map_glyphs` - Retrieves glyphs used to display labels on a map.
* `get_map_sprites` - Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG image paired with a JSON document describing the offsets of individual icons that will be displayed on a rendered map.
* `get_map_style_descriptor` - <p>Retrieves the map style descriptor from a map resource. </p> <p>The style descriptor contains speciﬁcations on how features render on a map. For example, what data to display, what order to display the data in, and the style for the data. Style descriptors follow the Mapbox Style Specification.</p>
* `get_map_tile` - <p>Retrieves a vector data tile from the map resource. Map tiles are used by clients to render a map. they're addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level. </p> <p>The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0) will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).</p>
* `list_device_positions` - A batch request to retrieve all device positions.
* `list_geofence_collections` - Lists geofence collections in your AWS account.
* `list_geofences` - Lists geofences stored in a given geofence collection.
* `list_maps` - Lists map resources in your AWS account.
* `list_place_indexes` - Lists place index resources in your AWS account.
* `list_route_calculators` - Lists route calculator resources in your AWS account.
* `list_tags_for_resource` - Returns a list of tags that are applied to the specified Amazon Location resource.
* `list_tracker_consumers` - Lists geofence collections currently associated to the given tracker resource.
* `list_trackers` - Lists tracker resources in your AWS account.
* `put_geofence` - Stores a geofence geometry in a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request. 
* `search_place_index_for_position` - Reverse geocodes a given coordinate and returns a legible address. Allows you to search for Places or points of interest near a given position.
* `search_place_index_for_text` - <p>Geocodes free-form text, such as an address, name, city, or region to allow you to search for Places or points of interest. </p> <p>Includes the option to apply additional parameters to narrow your list of results.</p> <note> <p>You can search for places near a given position using <code>BiasPosition</code>, or filter results within a bounding box using <code>FilterBBox</code>. Providing both parameters simultaneously returns an error.</p> </note>
* `tag_resource` - <p>Assigns one or more tags (key-value pairs) to the specified Amazon Location Service resource.</p> <pre><code> &lt;p&gt;Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.&lt;/p&gt; &lt;p&gt;You can use the &lt;code&gt;TagResource&lt;/code&gt; operation with an Amazon Location Service resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the tags already associated with the resource. If you specify a tag key that's already associated with the resource, the new tag value that you specify replaces the previous value for that tag. &lt;/p&gt; &lt;p&gt;You can associate up to 50 tags with a resource.&lt;/p&gt; </code></pre>
* `untag_resource` - Removes one or more tags from the specified Amazon Location resource.
* `update_geofence_collection` - Updates the specified properties of a given geofence collection.
* `update_map` - Updates the specified properties of a given map resource.
* `update_place_index` - Updates the specified properties of a given place index resource.
* `update_route_calculator` - Updates the specified properties for a given route calculator resource.
* `update_tracker` - Updates the specified properties of a given tracker resource.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

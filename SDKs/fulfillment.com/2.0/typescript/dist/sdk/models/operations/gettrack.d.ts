import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTrackQueryParams extends SpeakeasyBase {
    trackingNumber?: string;
}
export declare enum GetTrackTrackingResponseFeatureGeometryTypeEnum {
    Point = "Point",
    LineString = "LineString",
    Polygon = "Polygon",
    MultiPoint = "MultiPoint",
    MultiLineString = "MultiLineString",
    MultiPolygon = "MultiPolygon"
}
/**
 * GeoJSon geometry
 * http://geojson.org/geojson-spec.html#geometry-objects
**/
export declare class GetTrackTrackingResponseFeatureGeometry extends SpeakeasyBase {
    coordinates: any;
    type: GetTrackTrackingResponseFeatureGeometryTypeEnum;
}
export declare class GetTrackTrackingResponseFeatureProperties extends SpeakeasyBase {
    name?: string;
}
export declare enum GetTrackTrackingResponseFeatureTypeEnum {
    Feature = "Feature"
}
/**
 * GeoJSon Feature
 * https://tools.ietf.org/html/rfc7946#section-3.2
**/
export declare class GetTrackTrackingResponseFeature extends SpeakeasyBase {
    bbox?: any[];
    centerline?: shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry;
    geometry: GetTrackTrackingResponseFeatureGeometry;
    id?: number;
    properties: GetTrackTrackingResponseFeatureProperties;
    title?: string;
    type: GetTrackTrackingResponseFeatureTypeEnum;
}
export declare enum GetTrackTrackingResponseTrackingEventV2EventSourceEnum {
    Carrier = "carrier",
    Internal = "internal"
}
export declare class GetTrackTrackingResponseTrackingEventV2 extends SpeakeasyBase {
    eventCategory?: string;
    eventCategoryCode?: number;
    eventDateTime?: Date;
    eventLocation?: shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin;
    eventSource?: GetTrackTrackingResponseTrackingEventV2EventSourceEnum;
    eventStatus?: string;
}
export declare class GetTrackTrackingResponseTrackingNumberV2CarrierSimpleV2 extends SpeakeasyBase {
    id: number;
}
export declare class GetTrackTrackingResponseTrackingNumberV2 extends SpeakeasyBase {
    barcodeScanValue?: string;
    carrier?: GetTrackTrackingResponseTrackingNumberV2CarrierSimpleV2;
    value?: string;
}
export declare class GetTrackTrackingResponse extends SpeakeasyBase {
    destination?: shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin;
    fdcOrderId?: number;
    firstCheckedDateTime?: Date;
    firstTransitEvent?: Date;
    lastCheckedDateTime?: Date;
    lastUpdatedDateTime?: Date;
    origin?: GetTrackTrackingResponseFeature;
    status?: string;
    statusCategoryCode?: number;
    statusDateTime?: Date;
    statusMessage?: string;
    trackedEvents?: GetTrackTrackingResponseTrackingEventV2[];
    trackingNumber?: GetTrackTrackingResponseTrackingNumberV2;
}
export declare class GetTrackRequest extends SpeakeasyBase {
    queryParams: GetTrackQueryParams;
}
export declare class GetTrackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trackingResponse?: GetTrackTrackingResponse;
}

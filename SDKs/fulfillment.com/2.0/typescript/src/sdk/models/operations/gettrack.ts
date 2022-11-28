import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTrackQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trackingNumber" })
  trackingNumber?: string;
}

export enum GetTrackTrackingResponseFeatureGeometryTypeEnum {
    Point = "Point",
    LineString = "LineString",
    Polygon = "Polygon",
    MultiPoint = "MultiPoint",
    MultiLineString = "MultiLineString",
    MultiPolygon = "MultiPolygon"
}


// GetTrackTrackingResponseFeatureGeometry
/** 
 * GeoJSon geometry
 * http://geojson.org/geojson-spec.html#geometry-objects
**/
export class GetTrackTrackingResponseFeatureGeometry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coordinates" })
  coordinates: any;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetTrackTrackingResponseFeatureGeometryTypeEnum;
}


export class GetTrackTrackingResponseFeatureProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum GetTrackTrackingResponseFeatureTypeEnum {
    Feature = "Feature"
}


// GetTrackTrackingResponseFeature
/** 
 * GeoJSon Feature
 * https://tools.ietf.org/html/rfc7946#section-3.2
**/
export class GetTrackTrackingResponseFeature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bbox" })
  bbox?: any[];

  @SpeakeasyMetadata({ data: "json, name=centerline" })
  centerline?: shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry;

  @SpeakeasyMetadata({ data: "json, name=geometry" })
  geometry: GetTrackTrackingResponseFeatureGeometry;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties: GetTrackTrackingResponseFeatureProperties;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetTrackTrackingResponseFeatureTypeEnum;
}

export enum GetTrackTrackingResponseTrackingEventV2EventSourceEnum {
    Carrier = "carrier",
    Internal = "internal"
}


export class GetTrackTrackingResponseTrackingEventV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventCategory" })
  eventCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=eventCategoryCode" })
  eventCategoryCode?: number;

  @SpeakeasyMetadata({ data: "json, name=eventDateTime" })
  eventDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=eventLocation" })
  eventLocation?: shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin;

  @SpeakeasyMetadata({ data: "json, name=eventSource" })
  eventSource?: GetTrackTrackingResponseTrackingEventV2EventSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=eventStatus" })
  eventStatus?: string;
}


export class GetTrackTrackingResponseTrackingNumberV2CarrierSimpleV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}


export class GetTrackTrackingResponseTrackingNumberV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=barcodeScanValue" })
  barcodeScanValue?: string;

  @SpeakeasyMetadata({ data: "json, name=carrier" })
  carrier?: GetTrackTrackingResponseTrackingNumberV2CarrierSimpleV2;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class GetTrackTrackingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin;

  @SpeakeasyMetadata({ data: "json, name=fdcOrderId" })
  fdcOrderId?: number;

  @SpeakeasyMetadata({ data: "json, name=firstCheckedDateTime" })
  firstCheckedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=firstTransitEvent" })
  firstTransitEvent?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastCheckedDateTime" })
  lastCheckedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=origin" })
  origin?: GetTrackTrackingResponseFeature;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCategoryCode" })
  statusCategoryCode?: number;

  @SpeakeasyMetadata({ data: "json, name=statusDateTime" })
  statusDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=trackedEvents", elemType: GetTrackTrackingResponseTrackingEventV2 })
  trackedEvents?: GetTrackTrackingResponseTrackingEventV2[];

  @SpeakeasyMetadata({ data: "json, name=trackingNumber" })
  trackingNumber?: GetTrackTrackingResponseTrackingNumberV2;
}


export class GetTrackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTrackQueryParams;
}


export class GetTrackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trackingResponse?: GetTrackTrackingResponse;
}

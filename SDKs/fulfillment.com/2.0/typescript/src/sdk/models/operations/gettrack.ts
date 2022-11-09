import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTrackQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=trackingNumber" })
  trackingNumber?: string;
}


export class GetTrackRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTrackQueryParams;
}

export enum GetTrackTrackingResponseFeatureGeometryTypeEnum {
    Point = "Point"
,    LineString = "LineString"
,    Polygon = "Polygon"
,    MultiPoint = "MultiPoint"
,    MultiLineString = "MultiLineString"
,    MultiPolygon = "MultiPolygon"
}


// GetTrackTrackingResponseFeatureGeometry
/** 
 * GeoJSon geometry
 * http://geojson.org/geojson-spec.html#geometry-objects
**/
export class GetTrackTrackingResponseFeatureGeometry extends SpeakeasyBase {
  @Metadata({ data: "json, name=coordinates" })
  coordinates: any;

  @Metadata({ data: "json, name=type" })
  type: GetTrackTrackingResponseFeatureGeometryTypeEnum;
}


export class GetTrackTrackingResponseFeatureProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
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
  @Metadata({ data: "json, name=bbox" })
  bbox?: any[];

  @Metadata({ data: "json, name=centerline" })
  centerline?: shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry;

  @Metadata({ data: "json, name=geometry" })
  geometry: GetTrackTrackingResponseFeatureGeometry;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=properties" })
  properties: GetTrackTrackingResponseFeatureProperties;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type: GetTrackTrackingResponseFeatureTypeEnum;
}

export enum GetTrackTrackingResponseTrackingEventV2EventSourceEnum {
    Carrier = "carrier"
,    Internal = "internal"
}


export class GetTrackTrackingResponseTrackingEventV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventCategory" })
  eventCategory?: string;

  @Metadata({ data: "json, name=eventCategoryCode" })
  eventCategoryCode?: number;

  @Metadata({ data: "json, name=eventDateTime" })
  eventDateTime?: Date;

  @Metadata({ data: "json, name=eventLocation" })
  eventLocation?: shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin;

  @Metadata({ data: "json, name=eventSource" })
  eventSource?: GetTrackTrackingResponseTrackingEventV2EventSourceEnum;

  @Metadata({ data: "json, name=eventStatus" })
  eventStatus?: string;
}


export class GetTrackTrackingResponseTrackingNumberV2CarrierSimpleV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}


export class GetTrackTrackingResponseTrackingNumberV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=barcodeScanValue" })
  barcodeScanValue?: string;

  @Metadata({ data: "json, name=carrier" })
  carrier?: GetTrackTrackingResponseTrackingNumberV2CarrierSimpleV2;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class GetTrackTrackingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination?: shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin;

  @Metadata({ data: "json, name=fdcOrderId" })
  fdcOrderId?: number;

  @Metadata({ data: "json, name=firstCheckedDateTime" })
  firstCheckedDateTime?: Date;

  @Metadata({ data: "json, name=firstTransitEvent" })
  firstTransitEvent?: Date;

  @Metadata({ data: "json, name=lastCheckedDateTime" })
  lastCheckedDateTime?: Date;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=origin" })
  origin?: GetTrackTrackingResponseFeature;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=statusCategoryCode" })
  statusCategoryCode?: number;

  @Metadata({ data: "json, name=statusDateTime" })
  statusDateTime?: Date;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=trackedEvents", elemType: operations.GetTrackTrackingResponseTrackingEventV2 })
  trackedEvents?: GetTrackTrackingResponseTrackingEventV2[];

  @Metadata({ data: "json, name=trackingNumber" })
  trackingNumber?: GetTrackTrackingResponseTrackingNumberV2;
}


export class GetTrackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trackingResponse?: GetTrackTrackingResponse;
}

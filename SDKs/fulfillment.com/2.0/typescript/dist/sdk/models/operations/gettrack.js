var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var GetTrackQueryParams = /** @class */ (function (_super) {
    __extends(GetTrackQueryParams, _super);
    function GetTrackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trackingNumber" }),
        __metadata("design:type", String)
    ], GetTrackQueryParams.prototype, "trackingNumber", void 0);
    return GetTrackQueryParams;
}(SpeakeasyBase));
export { GetTrackQueryParams };
export var GetTrackTrackingResponseFeatureGeometryTypeEnum;
(function (GetTrackTrackingResponseFeatureGeometryTypeEnum) {
    GetTrackTrackingResponseFeatureGeometryTypeEnum["Point"] = "Point";
    GetTrackTrackingResponseFeatureGeometryTypeEnum["LineString"] = "LineString";
    GetTrackTrackingResponseFeatureGeometryTypeEnum["Polygon"] = "Polygon";
    GetTrackTrackingResponseFeatureGeometryTypeEnum["MultiPoint"] = "MultiPoint";
    GetTrackTrackingResponseFeatureGeometryTypeEnum["MultiLineString"] = "MultiLineString";
    GetTrackTrackingResponseFeatureGeometryTypeEnum["MultiPolygon"] = "MultiPolygon";
})(GetTrackTrackingResponseFeatureGeometryTypeEnum || (GetTrackTrackingResponseFeatureGeometryTypeEnum = {}));
// GetTrackTrackingResponseFeatureGeometry
/**
 * GeoJSon geometry
 * http://geojson.org/geojson-spec.html#geometry-objects
**/
var GetTrackTrackingResponseFeatureGeometry = /** @class */ (function (_super) {
    __extends(GetTrackTrackingResponseFeatureGeometry, _super);
    function GetTrackTrackingResponseFeatureGeometry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coordinates" }),
        __metadata("design:type", Object)
    ], GetTrackTrackingResponseFeatureGeometry.prototype, "coordinates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetTrackTrackingResponseFeatureGeometry.prototype, "type", void 0);
    return GetTrackTrackingResponseFeatureGeometry;
}(SpeakeasyBase));
export { GetTrackTrackingResponseFeatureGeometry };
var GetTrackTrackingResponseFeatureProperties = /** @class */ (function (_super) {
    __extends(GetTrackTrackingResponseFeatureProperties, _super);
    function GetTrackTrackingResponseFeatureProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetTrackTrackingResponseFeatureProperties.prototype, "name", void 0);
    return GetTrackTrackingResponseFeatureProperties;
}(SpeakeasyBase));
export { GetTrackTrackingResponseFeatureProperties };
export var GetTrackTrackingResponseFeatureTypeEnum;
(function (GetTrackTrackingResponseFeatureTypeEnum) {
    GetTrackTrackingResponseFeatureTypeEnum["Feature"] = "Feature";
})(GetTrackTrackingResponseFeatureTypeEnum || (GetTrackTrackingResponseFeatureTypeEnum = {}));
// GetTrackTrackingResponseFeature
/**
 * GeoJSon Feature
 * https://tools.ietf.org/html/rfc7946#section-3.2
**/
var GetTrackTrackingResponseFeature = /** @class */ (function (_super) {
    __extends(GetTrackTrackingResponseFeature, _super);
    function GetTrackTrackingResponseFeature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bbox" }),
        __metadata("design:type", Array)
    ], GetTrackTrackingResponseFeature.prototype, "bbox", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=centerline" }),
        __metadata("design:type", shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry)
    ], GetTrackTrackingResponseFeature.prototype, "centerline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geometry" }),
        __metadata("design:type", GetTrackTrackingResponseFeatureGeometry)
    ], GetTrackTrackingResponseFeature.prototype, "geometry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetTrackTrackingResponseFeature.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", GetTrackTrackingResponseFeatureProperties)
    ], GetTrackTrackingResponseFeature.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetTrackTrackingResponseFeature.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetTrackTrackingResponseFeature.prototype, "type", void 0);
    return GetTrackTrackingResponseFeature;
}(SpeakeasyBase));
export { GetTrackTrackingResponseFeature };
export var GetTrackTrackingResponseTrackingEventV2EventSourceEnum;
(function (GetTrackTrackingResponseTrackingEventV2EventSourceEnum) {
    GetTrackTrackingResponseTrackingEventV2EventSourceEnum["Carrier"] = "carrier";
    GetTrackTrackingResponseTrackingEventV2EventSourceEnum["Internal"] = "internal";
})(GetTrackTrackingResponseTrackingEventV2EventSourceEnum || (GetTrackTrackingResponseTrackingEventV2EventSourceEnum = {}));
var GetTrackTrackingResponseTrackingEventV2 = /** @class */ (function (_super) {
    __extends(GetTrackTrackingResponseTrackingEventV2, _super);
    function GetTrackTrackingResponseTrackingEventV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventCategory" }),
        __metadata("design:type", String)
    ], GetTrackTrackingResponseTrackingEventV2.prototype, "eventCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventCategoryCode" }),
        __metadata("design:type", Number)
    ], GetTrackTrackingResponseTrackingEventV2.prototype, "eventCategoryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventDateTime" }),
        __metadata("design:type", Date)
    ], GetTrackTrackingResponseTrackingEventV2.prototype, "eventDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventLocation" }),
        __metadata("design:type", shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin)
    ], GetTrackTrackingResponseTrackingEventV2.prototype, "eventLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventSource" }),
        __metadata("design:type", String)
    ], GetTrackTrackingResponseTrackingEventV2.prototype, "eventSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventStatus" }),
        __metadata("design:type", String)
    ], GetTrackTrackingResponseTrackingEventV2.prototype, "eventStatus", void 0);
    return GetTrackTrackingResponseTrackingEventV2;
}(SpeakeasyBase));
export { GetTrackTrackingResponseTrackingEventV2 };
var GetTrackTrackingResponseTrackingNumberV2CarrierSimpleV2 = /** @class */ (function (_super) {
    __extends(GetTrackTrackingResponseTrackingNumberV2CarrierSimpleV2, _super);
    function GetTrackTrackingResponseTrackingNumberV2CarrierSimpleV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetTrackTrackingResponseTrackingNumberV2CarrierSimpleV2.prototype, "id", void 0);
    return GetTrackTrackingResponseTrackingNumberV2CarrierSimpleV2;
}(SpeakeasyBase));
export { GetTrackTrackingResponseTrackingNumberV2CarrierSimpleV2 };
var GetTrackTrackingResponseTrackingNumberV2 = /** @class */ (function (_super) {
    __extends(GetTrackTrackingResponseTrackingNumberV2, _super);
    function GetTrackTrackingResponseTrackingNumberV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=barcodeScanValue" }),
        __metadata("design:type", String)
    ], GetTrackTrackingResponseTrackingNumberV2.prototype, "barcodeScanValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=carrier" }),
        __metadata("design:type", GetTrackTrackingResponseTrackingNumberV2CarrierSimpleV2)
    ], GetTrackTrackingResponseTrackingNumberV2.prototype, "carrier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetTrackTrackingResponseTrackingNumberV2.prototype, "value", void 0);
    return GetTrackTrackingResponseTrackingNumberV2;
}(SpeakeasyBase));
export { GetTrackTrackingResponseTrackingNumberV2 };
var GetTrackTrackingResponse = /** @class */ (function (_super) {
    __extends(GetTrackTrackingResponse, _super);
    function GetTrackTrackingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination" }),
        __metadata("design:type", shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin)
    ], GetTrackTrackingResponse.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fdcOrderId" }),
        __metadata("design:type", Number)
    ], GetTrackTrackingResponse.prototype, "fdcOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstCheckedDateTime" }),
        __metadata("design:type", Date)
    ], GetTrackTrackingResponse.prototype, "firstCheckedDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstTransitEvent" }),
        __metadata("design:type", Date)
    ], GetTrackTrackingResponse.prototype, "firstTransitEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastCheckedDateTime" }),
        __metadata("design:type", Date)
    ], GetTrackTrackingResponse.prototype, "lastCheckedDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" }),
        __metadata("design:type", Date)
    ], GetTrackTrackingResponse.prototype, "lastUpdatedDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=origin" }),
        __metadata("design:type", GetTrackTrackingResponseFeature)
    ], GetTrackTrackingResponse.prototype, "origin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetTrackTrackingResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusCategoryCode" }),
        __metadata("design:type", Number)
    ], GetTrackTrackingResponse.prototype, "statusCategoryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusDateTime" }),
        __metadata("design:type", Date)
    ], GetTrackTrackingResponse.prototype, "statusDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], GetTrackTrackingResponse.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackedEvents", elemType: GetTrackTrackingResponseTrackingEventV2 }),
        __metadata("design:type", Array)
    ], GetTrackTrackingResponse.prototype, "trackedEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackingNumber" }),
        __metadata("design:type", GetTrackTrackingResponseTrackingNumberV2)
    ], GetTrackTrackingResponse.prototype, "trackingNumber", void 0);
    return GetTrackTrackingResponse;
}(SpeakeasyBase));
export { GetTrackTrackingResponse };
var GetTrackRequest = /** @class */ (function (_super) {
    __extends(GetTrackRequest, _super);
    function GetTrackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTrackQueryParams)
    ], GetTrackRequest.prototype, "queryParams", void 0);
    return GetTrackRequest;
}(SpeakeasyBase));
export { GetTrackRequest };
var GetTrackResponse = /** @class */ (function (_super) {
    __extends(GetTrackResponse, _super);
    function GetTrackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTrackResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTrackResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTrackTrackingResponse)
    ], GetTrackResponse.prototype, "trackingResponse", void 0);
    return GetTrackResponse;
}(SpeakeasyBase));
export { GetTrackResponse };

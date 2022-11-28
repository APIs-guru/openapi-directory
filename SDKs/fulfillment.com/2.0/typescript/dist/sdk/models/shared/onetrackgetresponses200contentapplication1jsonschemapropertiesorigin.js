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
import { OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry } from "./onetrackgetresponses200contentapplication1jsonschemapropertiesoriginpropertiesgeometry";
export var OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum;
(function (OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum) {
    OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum["Point"] = "Point";
    OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum["LineString"] = "LineString";
    OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum["Polygon"] = "Polygon";
    OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum["MultiPoint"] = "MultiPoint";
    OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum["MultiLineString"] = "MultiLineString";
    OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum["MultiPolygon"] = "MultiPolygon";
})(OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum || (OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum = {}));
// OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry
/**
 * GeoJSon geometry
 * http://geojson.org/geojson-spec.html#geometry-objects
**/
var OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry = /** @class */ (function (_super) {
    __extends(OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry, _super);
    function OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coordinates" }),
        __metadata("design:type", Object)
    ], OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry.prototype, "coordinates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry.prototype, "type", void 0);
    return OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry;
}(SpeakeasyBase));
export { OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry };
var OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginProperties = /** @class */ (function (_super) {
    __extends(OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginProperties, _super);
    function OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginProperties.prototype, "name", void 0);
    return OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginProperties;
}(SpeakeasyBase));
export { OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginProperties };
export var OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginTypeEnum;
(function (OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginTypeEnum) {
    OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginTypeEnum["Feature"] = "Feature";
})(OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginTypeEnum || (OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginTypeEnum = {}));
// OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin
/**
 * GeoJSon Feature
 * https://tools.ietf.org/html/rfc7946#section-3.2
**/
var OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin = /** @class */ (function (_super) {
    __extends(OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin, _super);
    function OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bbox" }),
        __metadata("design:type", Array)
    ], OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin.prototype, "bbox", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=centerline" }),
        __metadata("design:type", OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry)
    ], OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin.prototype, "centerline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geometry" }),
        __metadata("design:type", OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry)
    ], OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin.prototype, "geometry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginProperties)
    ], OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin.prototype, "type", void 0);
    return OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin;
}(SpeakeasyBase));
export { OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin };

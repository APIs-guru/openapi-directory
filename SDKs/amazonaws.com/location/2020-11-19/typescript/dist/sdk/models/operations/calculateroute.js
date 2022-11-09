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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var CalculateRoutePathParams = /** @class */ (function (_super) {
    __extends(CalculateRoutePathParams, _super);
    function CalculateRoutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CalculatorName" }),
        __metadata("design:type", String)
    ], CalculateRoutePathParams.prototype, "calculatorName", void 0);
    return CalculateRoutePathParams;
}(SpeakeasyBase));
export { CalculateRoutePathParams };
var CalculateRouteHeaders = /** @class */ (function (_super) {
    __extends(CalculateRouteHeaders, _super);
    function CalculateRouteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CalculateRouteHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CalculateRouteHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CalculateRouteHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CalculateRouteHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CalculateRouteHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CalculateRouteHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CalculateRouteHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CalculateRouteHeaders;
}(SpeakeasyBase));
export { CalculateRouteHeaders };
// CalculateRouteRequestBodyCarModeOptions
/**
 * Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Car</code>.
**/
var CalculateRouteRequestBodyCarModeOptions = /** @class */ (function (_super) {
    __extends(CalculateRouteRequestBodyCarModeOptions, _super);
    function CalculateRouteRequestBodyCarModeOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AvoidFerries" }),
        __metadata("design:type", Boolean)
    ], CalculateRouteRequestBodyCarModeOptions.prototype, "avoidFerries", void 0);
    __decorate([
        Metadata({ data: "json, name=AvoidTolls" }),
        __metadata("design:type", Boolean)
    ], CalculateRouteRequestBodyCarModeOptions.prototype, "avoidTolls", void 0);
    return CalculateRouteRequestBodyCarModeOptions;
}(SpeakeasyBase));
export { CalculateRouteRequestBodyCarModeOptions };
export var CalculateRouteRequestBodyDistanceUnitEnum;
(function (CalculateRouteRequestBodyDistanceUnitEnum) {
    CalculateRouteRequestBodyDistanceUnitEnum["Kilometers"] = "Kilometers";
    CalculateRouteRequestBodyDistanceUnitEnum["Miles"] = "Miles";
})(CalculateRouteRequestBodyDistanceUnitEnum || (CalculateRouteRequestBodyDistanceUnitEnum = {}));
export var CalculateRouteRequestBodyTravelModeEnum;
(function (CalculateRouteRequestBodyTravelModeEnum) {
    CalculateRouteRequestBodyTravelModeEnum["Car"] = "Car";
    CalculateRouteRequestBodyTravelModeEnum["Truck"] = "Truck";
    CalculateRouteRequestBodyTravelModeEnum["Walking"] = "Walking";
})(CalculateRouteRequestBodyTravelModeEnum || (CalculateRouteRequestBodyTravelModeEnum = {}));
// CalculateRouteRequestBodyTruckModeOptions
/**
 * Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Truck</code>.
**/
var CalculateRouteRequestBodyTruckModeOptions = /** @class */ (function (_super) {
    __extends(CalculateRouteRequestBodyTruckModeOptions, _super);
    function CalculateRouteRequestBodyTruckModeOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AvoidFerries" }),
        __metadata("design:type", Boolean)
    ], CalculateRouteRequestBodyTruckModeOptions.prototype, "avoidFerries", void 0);
    __decorate([
        Metadata({ data: "json, name=AvoidTolls" }),
        __metadata("design:type", Boolean)
    ], CalculateRouteRequestBodyTruckModeOptions.prototype, "avoidTolls", void 0);
    __decorate([
        Metadata({ data: "json, name=Dimensions" }),
        __metadata("design:type", shared.TruckDimensions)
    ], CalculateRouteRequestBodyTruckModeOptions.prototype, "dimensions", void 0);
    __decorate([
        Metadata({ data: "json, name=Weight" }),
        __metadata("design:type", shared.TruckWeight)
    ], CalculateRouteRequestBodyTruckModeOptions.prototype, "weight", void 0);
    return CalculateRouteRequestBodyTruckModeOptions;
}(SpeakeasyBase));
export { CalculateRouteRequestBodyTruckModeOptions };
var CalculateRouteRequestBody = /** @class */ (function (_super) {
    __extends(CalculateRouteRequestBody, _super);
    function CalculateRouteRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CarModeOptions" }),
        __metadata("design:type", CalculateRouteRequestBodyCarModeOptions)
    ], CalculateRouteRequestBody.prototype, "carModeOptions", void 0);
    __decorate([
        Metadata({ data: "json, name=DepartNow" }),
        __metadata("design:type", Boolean)
    ], CalculateRouteRequestBody.prototype, "departNow", void 0);
    __decorate([
        Metadata({ data: "json, name=DeparturePosition" }),
        __metadata("design:type", Array)
    ], CalculateRouteRequestBody.prototype, "departurePosition", void 0);
    __decorate([
        Metadata({ data: "json, name=DepartureTime" }),
        __metadata("design:type", Date)
    ], CalculateRouteRequestBody.prototype, "departureTime", void 0);
    __decorate([
        Metadata({ data: "json, name=DestinationPosition" }),
        __metadata("design:type", Array)
    ], CalculateRouteRequestBody.prototype, "destinationPosition", void 0);
    __decorate([
        Metadata({ data: "json, name=DistanceUnit" }),
        __metadata("design:type", String)
    ], CalculateRouteRequestBody.prototype, "distanceUnit", void 0);
    __decorate([
        Metadata({ data: "json, name=IncludeLegGeometry" }),
        __metadata("design:type", Boolean)
    ], CalculateRouteRequestBody.prototype, "includeLegGeometry", void 0);
    __decorate([
        Metadata({ data: "json, name=TravelMode" }),
        __metadata("design:type", String)
    ], CalculateRouteRequestBody.prototype, "travelMode", void 0);
    __decorate([
        Metadata({ data: "json, name=TruckModeOptions" }),
        __metadata("design:type", CalculateRouteRequestBodyTruckModeOptions)
    ], CalculateRouteRequestBody.prototype, "truckModeOptions", void 0);
    __decorate([
        Metadata({ data: "json, name=WaypointPositions" }),
        __metadata("design:type", Array)
    ], CalculateRouteRequestBody.prototype, "waypointPositions", void 0);
    return CalculateRouteRequestBody;
}(SpeakeasyBase));
export { CalculateRouteRequestBody };
var CalculateRouteRequest = /** @class */ (function (_super) {
    __extends(CalculateRouteRequest, _super);
    function CalculateRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CalculateRoutePathParams)
    ], CalculateRouteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CalculateRouteHeaders)
    ], CalculateRouteRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CalculateRouteRequestBody)
    ], CalculateRouteRequest.prototype, "request", void 0);
    return CalculateRouteRequest;
}(SpeakeasyBase));
export { CalculateRouteRequest };
var CalculateRouteResponse = /** @class */ (function (_super) {
    __extends(CalculateRouteResponse, _super);
    function CalculateRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CalculateRouteResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CalculateRouteResponse)
    ], CalculateRouteResponse.prototype, "calculateRouteResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CalculateRouteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CalculateRouteResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CalculateRouteResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CalculateRouteResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CalculateRouteResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CalculateRouteResponse.prototype, "validationException", void 0);
    return CalculateRouteResponse;
}(SpeakeasyBase));
export { CalculateRouteResponse };

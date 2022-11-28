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
export var AirtravelCoordinatesServerList = [
    "http://api.climatekuul.com:8000/footprint",
];
var AirtravelCoordinatesHeaders = /** @class */ (function (_super) {
    __extends(AirtravelCoordinatesHeaders, _super);
    function AirtravelCoordinatesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" }),
        __metadata("design:type", String)
    ], AirtravelCoordinatesHeaders.prototype, "contentType", void 0);
    return AirtravelCoordinatesHeaders;
}(SpeakeasyBase));
export { AirtravelCoordinatesHeaders };
var AirtravelCoordinatesRequestBody = /** @class */ (function (_super) {
    __extends(AirtravelCoordinatesRequestBody, _super);
    function AirtravelCoordinatesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=apiKey_l1;" }),
        __metadata("design:type", String)
    ], AirtravelCoordinatesRequestBody.prototype, "apiKeyL1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=apiKey_l2;" }),
        __metadata("design:type", String)
    ], AirtravelCoordinatesRequestBody.prototype, "apiKeyL2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=destination_airport_latitude;" }),
        __metadata("design:type", Number)
    ], AirtravelCoordinatesRequestBody.prototype, "destinationAirportLatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=destination_airport_longitude;" }),
        __metadata("design:type", Number)
    ], AirtravelCoordinatesRequestBody.prototype, "destinationAirportLongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=number_of_passengers;" }),
        __metadata("design:type", Number)
    ], AirtravelCoordinatesRequestBody.prototype, "numberOfPassengers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=origin_airport_latitude;" }),
        __metadata("design:type", Number)
    ], AirtravelCoordinatesRequestBody.prototype, "originAirportLatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=origin_airport_longitude;" }),
        __metadata("design:type", Number)
    ], AirtravelCoordinatesRequestBody.prototype, "originAirportLongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=travel_class;" }),
        __metadata("design:type", String)
    ], AirtravelCoordinatesRequestBody.prototype, "travelClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=travel_mode;" }),
        __metadata("design:type", String)
    ], AirtravelCoordinatesRequestBody.prototype, "travelMode", void 0);
    return AirtravelCoordinatesRequestBody;
}(SpeakeasyBase));
export { AirtravelCoordinatesRequestBody };
var AirtravelCoordinatesRequest = /** @class */ (function (_super) {
    __extends(AirtravelCoordinatesRequest, _super);
    function AirtravelCoordinatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AirtravelCoordinatesRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AirtravelCoordinatesHeaders)
    ], AirtravelCoordinatesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", AirtravelCoordinatesRequestBody)
    ], AirtravelCoordinatesRequest.prototype, "request", void 0);
    return AirtravelCoordinatesRequest;
}(SpeakeasyBase));
export { AirtravelCoordinatesRequest };
var AirtravelCoordinatesResponse = /** @class */ (function (_super) {
    __extends(AirtravelCoordinatesResponse, _super);
    function AirtravelCoordinatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AirtravelCoordinatesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AirtravelCoordinatesResponse.prototype, "statusCode", void 0);
    return AirtravelCoordinatesResponse;
}(SpeakeasyBase));
export { AirtravelCoordinatesResponse };

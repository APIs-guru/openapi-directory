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
export var GetApiV1DonationsCarbonCalculateTransportationMethodEnum;
(function (GetApiV1DonationsCarbonCalculateTransportationMethodEnum) {
    GetApiV1DonationsCarbonCalculateTransportationMethodEnum["Air"] = "air";
    GetApiV1DonationsCarbonCalculateTransportationMethodEnum["Truck"] = "truck";
    GetApiV1DonationsCarbonCalculateTransportationMethodEnum["Rail"] = "rail";
    GetApiV1DonationsCarbonCalculateTransportationMethodEnum["Sea"] = "sea";
})(GetApiV1DonationsCarbonCalculateTransportationMethodEnum || (GetApiV1DonationsCarbonCalculateTransportationMethodEnum = {}));
var GetApiV1DonationsCarbonCalculateQueryParams = /** @class */ (function (_super) {
    __extends(GetApiV1DonationsCarbonCalculateQueryParams, _super);
    function GetApiV1DonationsCarbonCalculateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=destination_address" }),
        __metadata("design:type", Number)
    ], GetApiV1DonationsCarbonCalculateQueryParams.prototype, "destinationAddress", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=distance_mi" }),
        __metadata("design:type", Number)
    ], GetApiV1DonationsCarbonCalculateQueryParams.prototype, "distanceMi", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=origin_address" }),
        __metadata("design:type", Number)
    ], GetApiV1DonationsCarbonCalculateQueryParams.prototype, "originAddress", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=transportation_method" }),
        __metadata("design:type", String)
    ], GetApiV1DonationsCarbonCalculateQueryParams.prototype, "transportationMethod", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=weight_lb" }),
        __metadata("design:type", Number)
    ], GetApiV1DonationsCarbonCalculateQueryParams.prototype, "weightLb", void 0);
    return GetApiV1DonationsCarbonCalculateQueryParams;
}(SpeakeasyBase));
export { GetApiV1DonationsCarbonCalculateQueryParams };
var GetApiV1DonationsCarbonCalculateSecurity = /** @class */ (function (_super) {
    __extends(GetApiV1DonationsCarbonCalculateSecurity, _super);
    function GetApiV1DonationsCarbonCalculateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], GetApiV1DonationsCarbonCalculateSecurity.prototype, "basicAuth", void 0);
    return GetApiV1DonationsCarbonCalculateSecurity;
}(SpeakeasyBase));
export { GetApiV1DonationsCarbonCalculateSecurity };
var GetApiV1DonationsCarbonCalculateRequest = /** @class */ (function (_super) {
    __extends(GetApiV1DonationsCarbonCalculateRequest, _super);
    function GetApiV1DonationsCarbonCalculateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiV1DonationsCarbonCalculateQueryParams)
    ], GetApiV1DonationsCarbonCalculateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiV1DonationsCarbonCalculateSecurity)
    ], GetApiV1DonationsCarbonCalculateRequest.prototype, "security", void 0);
    return GetApiV1DonationsCarbonCalculateRequest;
}(SpeakeasyBase));
export { GetApiV1DonationsCarbonCalculateRequest };
var GetApiV1DonationsCarbonCalculateResponse = /** @class */ (function (_super) {
    __extends(GetApiV1DonationsCarbonCalculateResponse, _super);
    function GetApiV1DonationsCarbonCalculateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetApiV1DonationsCarbonCalculateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetApiV1DonationsCarbonCalculateResponse.prototype, "statusCode", void 0);
    return GetApiV1DonationsCarbonCalculateResponse;
}(SpeakeasyBase));
export { GetApiV1DonationsCarbonCalculateResponse };

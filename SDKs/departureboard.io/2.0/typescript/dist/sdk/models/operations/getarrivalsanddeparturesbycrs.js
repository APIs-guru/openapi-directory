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
var GetArrivalsAndDeparturesByCrsPathParams = /** @class */ (function (_super) {
    __extends(GetArrivalsAndDeparturesByCrsPathParams, _super);
    function GetArrivalsAndDeparturesByCrsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CRS" }),
        __metadata("design:type", String)
    ], GetArrivalsAndDeparturesByCrsPathParams.prototype, "crs", void 0);
    return GetArrivalsAndDeparturesByCrsPathParams;
}(SpeakeasyBase));
export { GetArrivalsAndDeparturesByCrsPathParams };
var GetArrivalsAndDeparturesByCrsQueryParams = /** @class */ (function (_super) {
    __extends(GetArrivalsAndDeparturesByCrsQueryParams, _super);
    function GetArrivalsAndDeparturesByCrsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=apiKey" }),
        __metadata("design:type", String)
    ], GetArrivalsAndDeparturesByCrsQueryParams.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filterStation" }),
        __metadata("design:type", String)
    ], GetArrivalsAndDeparturesByCrsQueryParams.prototype, "filterStation", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filterType" }),
        __metadata("design:type", String)
    ], GetArrivalsAndDeparturesByCrsQueryParams.prototype, "filterType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=numServices" }),
        __metadata("design:type", Number)
    ], GetArrivalsAndDeparturesByCrsQueryParams.prototype, "numServices", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=serviceDetails" }),
        __metadata("design:type", Boolean)
    ], GetArrivalsAndDeparturesByCrsQueryParams.prototype, "serviceDetails", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeOffset" }),
        __metadata("design:type", Number)
    ], GetArrivalsAndDeparturesByCrsQueryParams.prototype, "timeOffset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeWindow" }),
        __metadata("design:type", Number)
    ], GetArrivalsAndDeparturesByCrsQueryParams.prototype, "timeWindow", void 0);
    return GetArrivalsAndDeparturesByCrsQueryParams;
}(SpeakeasyBase));
export { GetArrivalsAndDeparturesByCrsQueryParams };
var GetArrivalsAndDeparturesByCrsRequest = /** @class */ (function (_super) {
    __extends(GetArrivalsAndDeparturesByCrsRequest, _super);
    function GetArrivalsAndDeparturesByCrsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetArrivalsAndDeparturesByCrsPathParams)
    ], GetArrivalsAndDeparturesByCrsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetArrivalsAndDeparturesByCrsQueryParams)
    ], GetArrivalsAndDeparturesByCrsRequest.prototype, "queryParams", void 0);
    return GetArrivalsAndDeparturesByCrsRequest;
}(SpeakeasyBase));
export { GetArrivalsAndDeparturesByCrsRequest };
var GetArrivalsAndDeparturesByCrsResponse = /** @class */ (function (_super) {
    __extends(GetArrivalsAndDeparturesByCrsResponse, _super);
    function GetArrivalsAndDeparturesByCrsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetArrivalsAndDeparturesByCrsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetArrivalsAndDeparturesByCrsResponse.prototype, "statusCode", void 0);
    return GetArrivalsAndDeparturesByCrsResponse;
}(SpeakeasyBase));
export { GetArrivalsAndDeparturesByCrsResponse };

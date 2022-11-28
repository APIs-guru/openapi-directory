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
export var GetPopularCarsCarTypeEnum;
(function (GetPopularCarsCarTypeEnum) {
    GetPopularCarsCarTypeEnum["New"] = "new";
    GetPopularCarsCarTypeEnum["Used"] = "used";
})(GetPopularCarsCarTypeEnum || (GetPopularCarsCarTypeEnum = {}));
export var GetPopularCarsCountryEnum;
(function (GetPopularCarsCountryEnum) {
    GetPopularCarsCountryEnum["UsLower"] = "us";
    GetPopularCarsCountryEnum["CaLower"] = "ca";
    GetPopularCarsCountryEnum["UsUpper"] = "US";
    GetPopularCarsCountryEnum["CaUpper"] = "CA";
})(GetPopularCarsCountryEnum || (GetPopularCarsCountryEnum = {}));
var GetPopularCarsQueryParams = /** @class */ (function (_super) {
    __extends(GetPopularCarsQueryParams, _super);
    function GetPopularCarsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetPopularCarsQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=car_type" }),
        __metadata("design:type", String)
    ], GetPopularCarsQueryParams.prototype, "carType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city_state" }),
        __metadata("design:type", String)
    ], GetPopularCarsQueryParams.prototype, "cityState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], GetPopularCarsQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], GetPopularCarsQueryParams.prototype, "state", void 0);
    return GetPopularCarsQueryParams;
}(SpeakeasyBase));
export { GetPopularCarsQueryParams };
var GetPopularCarsRequest = /** @class */ (function (_super) {
    __extends(GetPopularCarsRequest, _super);
    function GetPopularCarsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPopularCarsQueryParams)
    ], GetPopularCarsRequest.prototype, "queryParams", void 0);
    return GetPopularCarsRequest;
}(SpeakeasyBase));
export { GetPopularCarsRequest };
var GetPopularCarsResponse = /** @class */ (function (_super) {
    __extends(GetPopularCarsResponse, _super);
    function GetPopularCarsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPopularCarsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetPopularCarsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PopularCars)
    ], GetPopularCarsResponse.prototype, "popularCars", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPopularCarsResponse.prototype, "statusCode", void 0);
    return GetPopularCarsResponse;
}(SpeakeasyBase));
export { GetPopularCarsResponse };

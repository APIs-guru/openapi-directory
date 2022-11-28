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
export var GetSalesCountCarTypeEnum;
(function (GetSalesCountCarTypeEnum) {
    GetSalesCountCarTypeEnum["New"] = "new";
    GetSalesCountCarTypeEnum["Used"] = "used";
})(GetSalesCountCarTypeEnum || (GetSalesCountCarTypeEnum = {}));
export var GetSalesCountCountryEnum;
(function (GetSalesCountCountryEnum) {
    GetSalesCountCountryEnum["UsLower"] = "us";
    GetSalesCountCountryEnum["CaLower"] = "ca";
    GetSalesCountCountryEnum["UsUpper"] = "US";
    GetSalesCountCountryEnum["CaUpper"] = "CA";
})(GetSalesCountCountryEnum || (GetSalesCountCountryEnum = {}));
var GetSalesCountQueryParams = /** @class */ (function (_super) {
    __extends(GetSalesCountQueryParams, _super);
    function GetSalesCountQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetSalesCountQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=car_type" }),
        __metadata("design:type", String)
    ], GetSalesCountQueryParams.prototype, "carType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city_state" }),
        __metadata("design:type", String)
    ], GetSalesCountQueryParams.prototype, "cityState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], GetSalesCountQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=make" }),
        __metadata("design:type", String)
    ], GetSalesCountQueryParams.prototype, "make", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mm" }),
        __metadata("design:type", String)
    ], GetSalesCountQueryParams.prototype, "mm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], GetSalesCountQueryParams.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taxonomy_vin" }),
        __metadata("design:type", String)
    ], GetSalesCountQueryParams.prototype, "taxonomyVin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vin" }),
        __metadata("design:type", String)
    ], GetSalesCountQueryParams.prototype, "vin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ymm" }),
        __metadata("design:type", String)
    ], GetSalesCountQueryParams.prototype, "ymm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ymmt" }),
        __metadata("design:type", String)
    ], GetSalesCountQueryParams.prototype, "ymmt", void 0);
    return GetSalesCountQueryParams;
}(SpeakeasyBase));
export { GetSalesCountQueryParams };
var GetSalesCountRequest = /** @class */ (function (_super) {
    __extends(GetSalesCountRequest, _super);
    function GetSalesCountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSalesCountQueryParams)
    ], GetSalesCountRequest.prototype, "queryParams", void 0);
    return GetSalesCountRequest;
}(SpeakeasyBase));
export { GetSalesCountRequest };
var GetSalesCountResponse = /** @class */ (function (_super) {
    __extends(GetSalesCountResponse, _super);
    function GetSalesCountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSalesCountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetSalesCountResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Sales)
    ], GetSalesCountResponse.prototype, "sales", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSalesCountResponse.prototype, "statusCode", void 0);
    return GetSalesCountResponse;
}(SpeakeasyBase));
export { GetSalesCountResponse };

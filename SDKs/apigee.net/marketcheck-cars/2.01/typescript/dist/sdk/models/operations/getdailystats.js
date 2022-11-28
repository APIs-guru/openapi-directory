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
export var GetDailyStatsCarTypeEnum;
(function (GetDailyStatsCarTypeEnum) {
    GetDailyStatsCarTypeEnum["New"] = "new";
    GetDailyStatsCarTypeEnum["Used"] = "used";
})(GetDailyStatsCarTypeEnum || (GetDailyStatsCarTypeEnum = {}));
export var GetDailyStatsCountryEnum;
(function (GetDailyStatsCountryEnum) {
    GetDailyStatsCountryEnum["Us"] = "us";
    GetDailyStatsCountryEnum["Ca"] = "ca";
})(GetDailyStatsCountryEnum || (GetDailyStatsCountryEnum = {}));
var GetDailyStatsQueryParams = /** @class */ (function (_super) {
    __extends(GetDailyStatsQueryParams, _super);
    function GetDailyStatsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetDailyStatsQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=car_type" }),
        __metadata("design:type", String)
    ], GetDailyStatsQueryParams.prototype, "carType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city_state" }),
        __metadata("design:type", String)
    ], GetDailyStatsQueryParams.prototype, "cityState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], GetDailyStatsQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], GetDailyStatsQueryParams.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taxonomy_vin" }),
        __metadata("design:type", String)
    ], GetDailyStatsQueryParams.prototype, "taxonomyVin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vin" }),
        __metadata("design:type", String)
    ], GetDailyStatsQueryParams.prototype, "vin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ymm" }),
        __metadata("design:type", String)
    ], GetDailyStatsQueryParams.prototype, "ymm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ymmt" }),
        __metadata("design:type", String)
    ], GetDailyStatsQueryParams.prototype, "ymmt", void 0);
    return GetDailyStatsQueryParams;
}(SpeakeasyBase));
export { GetDailyStatsQueryParams };
var GetDailyStatsRequest = /** @class */ (function (_super) {
    __extends(GetDailyStatsRequest, _super);
    function GetDailyStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDailyStatsQueryParams)
    ], GetDailyStatsRequest.prototype, "queryParams", void 0);
    return GetDailyStatsRequest;
}(SpeakeasyBase));
export { GetDailyStatsRequest };
var GetDailyStatsResponse = /** @class */ (function (_super) {
    __extends(GetDailyStatsResponse, _super);
    function GetDailyStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDailyStatsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DailyStats)
    ], GetDailyStatsResponse.prototype, "dailyStats", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetDailyStatsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDailyStatsResponse.prototype, "statusCode", void 0);
    return GetDailyStatsResponse;
}(SpeakeasyBase));
export { GetDailyStatsResponse };

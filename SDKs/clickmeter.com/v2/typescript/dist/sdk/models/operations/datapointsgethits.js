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
var DataPointsGetHitsPathParams = /** @class */ (function (_super) {
    __extends(DataPointsGetHitsPathParams, _super);
    function DataPointsGetHitsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], DataPointsGetHitsPathParams.prototype, "id", void 0);
    return DataPointsGetHitsPathParams;
}(SpeakeasyBase));
export { DataPointsGetHitsPathParams };
export var DataPointsGetHitsFilterEnum;
(function (DataPointsGetHitsFilterEnum) {
    DataPointsGetHitsFilterEnum["Spiders"] = "spiders";
    DataPointsGetHitsFilterEnum["Uniques"] = "uniques";
    DataPointsGetHitsFilterEnum["Nonuniques"] = "nonuniques";
    DataPointsGetHitsFilterEnum["Conversions"] = "conversions";
})(DataPointsGetHitsFilterEnum || (DataPointsGetHitsFilterEnum = {}));
export var DataPointsGetHitsTimeframeEnum;
(function (DataPointsGetHitsTimeframeEnum) {
    DataPointsGetHitsTimeframeEnum["Yesterday"] = "yesterday";
    DataPointsGetHitsTimeframeEnum["Last7"] = "last7";
    DataPointsGetHitsTimeframeEnum["Last30"] = "last30";
    DataPointsGetHitsTimeframeEnum["Lastmonth"] = "lastmonth";
    DataPointsGetHitsTimeframeEnum["Currentmonth"] = "currentmonth";
    DataPointsGetHitsTimeframeEnum["Previousmonth"] = "previousmonth";
    DataPointsGetHitsTimeframeEnum["Last90"] = "last90";
    DataPointsGetHitsTimeframeEnum["Last120"] = "last120";
    DataPointsGetHitsTimeframeEnum["Last180"] = "last180";
    DataPointsGetHitsTimeframeEnum["Custom"] = "custom";
})(DataPointsGetHitsTimeframeEnum || (DataPointsGetHitsTimeframeEnum = {}));
var DataPointsGetHitsQueryParams = /** @class */ (function (_super) {
    __extends(DataPointsGetHitsQueryParams, _super);
    function DataPointsGetHitsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DataPointsGetHitsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], DataPointsGetHitsQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DataPointsGetHitsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], DataPointsGetHitsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe" }),
        __metadata("design:type", String)
    ], DataPointsGetHitsQueryParams.prototype, "timeframe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], DataPointsGetHitsQueryParams.prototype, "toDay", void 0);
    return DataPointsGetHitsQueryParams;
}(SpeakeasyBase));
export { DataPointsGetHitsQueryParams };
var DataPointsGetHitsRequest = /** @class */ (function (_super) {
    __extends(DataPointsGetHitsRequest, _super);
    function DataPointsGetHitsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataPointsGetHitsPathParams)
    ], DataPointsGetHitsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataPointsGetHitsQueryParams)
    ], DataPointsGetHitsRequest.prototype, "queryParams", void 0);
    return DataPointsGetHitsRequest;
}(SpeakeasyBase));
export { DataPointsGetHitsRequest };
var DataPointsGetHitsResponse = /** @class */ (function (_super) {
    __extends(DataPointsGetHitsResponse, _super);
    function DataPointsGetHitsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreDtoClickStreamHitListPage)
    ], DataPointsGetHitsResponse.prototype, "apiCoreDtoClickStreamHitListPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataPointsGetHitsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataPointsGetHitsResponse.prototype, "statusCode", void 0);
    return DataPointsGetHitsResponse;
}(SpeakeasyBase));
export { DataPointsGetHitsResponse };

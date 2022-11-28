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
export var HitsGetHitsFilterEnum;
(function (HitsGetHitsFilterEnum) {
    HitsGetHitsFilterEnum["Spiders"] = "spiders";
    HitsGetHitsFilterEnum["Uniques"] = "uniques";
    HitsGetHitsFilterEnum["Nonuniques"] = "nonuniques";
    HitsGetHitsFilterEnum["Conversions"] = "conversions";
})(HitsGetHitsFilterEnum || (HitsGetHitsFilterEnum = {}));
export var HitsGetHitsTimeframeEnum;
(function (HitsGetHitsTimeframeEnum) {
    HitsGetHitsTimeframeEnum["Yesterday"] = "yesterday";
    HitsGetHitsTimeframeEnum["Last7"] = "last7";
    HitsGetHitsTimeframeEnum["Last30"] = "last30";
    HitsGetHitsTimeframeEnum["Lastmonth"] = "lastmonth";
    HitsGetHitsTimeframeEnum["Currentmonth"] = "currentmonth";
    HitsGetHitsTimeframeEnum["Previousmonth"] = "previousmonth";
    HitsGetHitsTimeframeEnum["Last90"] = "last90";
    HitsGetHitsTimeframeEnum["Last120"] = "last120";
    HitsGetHitsTimeframeEnum["Last180"] = "last180";
    HitsGetHitsTimeframeEnum["Custom"] = "custom";
})(HitsGetHitsTimeframeEnum || (HitsGetHitsTimeframeEnum = {}));
var HitsGetHitsQueryParams = /** @class */ (function (_super) {
    __extends(HitsGetHitsQueryParams, _super);
    function HitsGetHitsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], HitsGetHitsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], HitsGetHitsQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], HitsGetHitsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], HitsGetHitsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe" }),
        __metadata("design:type", String)
    ], HitsGetHitsQueryParams.prototype, "timeframe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], HitsGetHitsQueryParams.prototype, "toDay", void 0);
    return HitsGetHitsQueryParams;
}(SpeakeasyBase));
export { HitsGetHitsQueryParams };
var HitsGetHitsRequest = /** @class */ (function (_super) {
    __extends(HitsGetHitsRequest, _super);
    function HitsGetHitsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HitsGetHitsQueryParams)
    ], HitsGetHitsRequest.prototype, "queryParams", void 0);
    return HitsGetHitsRequest;
}(SpeakeasyBase));
export { HitsGetHitsRequest };
var HitsGetHitsResponse = /** @class */ (function (_super) {
    __extends(HitsGetHitsResponse, _super);
    function HitsGetHitsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreDtoClickStreamHitListPage)
    ], HitsGetHitsResponse.prototype, "apiCoreDtoClickStreamHitListPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HitsGetHitsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HitsGetHitsResponse.prototype, "statusCode", void 0);
    return HitsGetHitsResponse;
}(SpeakeasyBase));
export { HitsGetHitsResponse };

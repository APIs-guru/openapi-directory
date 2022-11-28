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
export var ReportsGetTimeframeEnum;
(function (ReportsGetTimeframeEnum) {
    ReportsGetTimeframeEnum["Yesterday"] = "yesterday";
    ReportsGetTimeframeEnum["Last7"] = "last7";
    ReportsGetTimeframeEnum["Last30"] = "last30";
    ReportsGetTimeframeEnum["Lastmonth"] = "lastmonth";
    ReportsGetTimeframeEnum["Currentmonth"] = "currentmonth";
    ReportsGetTimeframeEnum["Previousmonth"] = "previousmonth";
    ReportsGetTimeframeEnum["Last90"] = "last90";
    ReportsGetTimeframeEnum["Last120"] = "last120";
    ReportsGetTimeframeEnum["Last180"] = "last180";
    ReportsGetTimeframeEnum["Beginning"] = "beginning";
    ReportsGetTimeframeEnum["Custom"] = "custom";
})(ReportsGetTimeframeEnum || (ReportsGetTimeframeEnum = {}));
export var ReportsGetTypeEnum;
(function (ReportsGetTypeEnum) {
    ReportsGetTypeEnum["Browsers"] = "browsers";
    ReportsGetTypeEnum["Browsersfamilies"] = "browsersfamilies";
    ReportsGetTypeEnum["Platforms"] = "platforms";
    ReportsGetTypeEnum["Cities"] = "cities";
    ReportsGetTypeEnum["Countries"] = "countries";
    ReportsGetTypeEnum["Isps"] = "isps";
    ReportsGetTypeEnum["Ips"] = "ips";
    ReportsGetTypeEnum["Oss"] = "oss";
    ReportsGetTypeEnum["Ossfamilies"] = "ossfamilies";
    ReportsGetTypeEnum["Keywords"] = "keywords";
    ReportsGetTypeEnum["Referrers"] = "referrers";
    ReportsGetTypeEnum["Destinations"] = "destinations";
    ReportsGetTypeEnum["Languages"] = "languages";
    ReportsGetTypeEnum["Params"] = "params";
})(ReportsGetTypeEnum || (ReportsGetTypeEnum = {}));
var ReportsGetQueryParams = /** @class */ (function (_super) {
    __extends(ReportsGetQueryParams, _super);
    function ReportsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conversion" }),
        __metadata("design:type", Number)
    ], ReportsGetQueryParams.prototype, "conversion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=datapoint" }),
        __metadata("design:type", Number)
    ], ReportsGetQueryParams.prototype, "datapoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], ReportsGetQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", Number)
    ], ReportsGetQueryParams.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hittype" }),
        __metadata("design:type", String)
    ], ReportsGetQueryParams.prototype, "hittype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe" }),
        __metadata("design:type", String)
    ], ReportsGetQueryParams.prototype, "timeframe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], ReportsGetQueryParams.prototype, "toDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], ReportsGetQueryParams.prototype, "type", void 0);
    return ReportsGetQueryParams;
}(SpeakeasyBase));
export { ReportsGetQueryParams };
var ReportsGetRequest = /** @class */ (function (_super) {
    __extends(ReportsGetRequest, _super);
    function ReportsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReportsGetQueryParams)
    ], ReportsGetRequest.prototype, "queryParams", void 0);
    return ReportsGetRequest;
}(SpeakeasyBase));
export { ReportsGetRequest };
var ReportsGetResponse = /** @class */ (function (_super) {
    __extends(ReportsGetResponse, _super);
    function ReportsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreDtoTopsTop)
    ], ReportsGetResponse.prototype, "apiCoreDtoTopsTop", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReportsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReportsGetResponse.prototype, "statusCode", void 0);
    return ReportsGetResponse;
}(SpeakeasyBase));
export { ReportsGetResponse };

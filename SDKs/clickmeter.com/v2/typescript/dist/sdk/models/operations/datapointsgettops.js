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
var DataPointsGetTopsPathParams = /** @class */ (function (_super) {
    __extends(DataPointsGetTopsPathParams, _super);
    function DataPointsGetTopsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], DataPointsGetTopsPathParams.prototype, "id", void 0);
    return DataPointsGetTopsPathParams;
}(SpeakeasyBase));
export { DataPointsGetTopsPathParams };
export var DataPointsGetTopsTimeframeEnum;
(function (DataPointsGetTopsTimeframeEnum) {
    DataPointsGetTopsTimeframeEnum["Yesterday"] = "yesterday";
    DataPointsGetTopsTimeframeEnum["Last7"] = "last7";
    DataPointsGetTopsTimeframeEnum["Last30"] = "last30";
    DataPointsGetTopsTimeframeEnum["Lastmonth"] = "lastmonth";
    DataPointsGetTopsTimeframeEnum["Currentmonth"] = "currentmonth";
    DataPointsGetTopsTimeframeEnum["Previousmonth"] = "previousmonth";
    DataPointsGetTopsTimeframeEnum["Last90"] = "last90";
    DataPointsGetTopsTimeframeEnum["Last120"] = "last120";
    DataPointsGetTopsTimeframeEnum["Last180"] = "last180";
    DataPointsGetTopsTimeframeEnum["Beginning"] = "beginning";
    DataPointsGetTopsTimeframeEnum["Custom"] = "custom";
})(DataPointsGetTopsTimeframeEnum || (DataPointsGetTopsTimeframeEnum = {}));
export var DataPointsGetTopsTypeEnum;
(function (DataPointsGetTopsTypeEnum) {
    DataPointsGetTopsTypeEnum["Browsers"] = "browsers";
    DataPointsGetTopsTypeEnum["Browsersfamilies"] = "browsersfamilies";
    DataPointsGetTopsTypeEnum["Platforms"] = "platforms";
    DataPointsGetTopsTypeEnum["Cities"] = "cities";
    DataPointsGetTopsTypeEnum["Countries"] = "countries";
    DataPointsGetTopsTypeEnum["Isps"] = "isps";
    DataPointsGetTopsTypeEnum["Ips"] = "ips";
    DataPointsGetTopsTypeEnum["Oss"] = "oss";
    DataPointsGetTopsTypeEnum["Ossfamilies"] = "ossfamilies";
    DataPointsGetTopsTypeEnum["Keywords"] = "keywords";
    DataPointsGetTopsTypeEnum["Referrers"] = "referrers";
    DataPointsGetTopsTypeEnum["Destinations"] = "destinations";
    DataPointsGetTopsTypeEnum["Languages"] = "languages";
    DataPointsGetTopsTypeEnum["Params"] = "params";
})(DataPointsGetTopsTypeEnum || (DataPointsGetTopsTypeEnum = {}));
var DataPointsGetTopsQueryParams = /** @class */ (function (_super) {
    __extends(DataPointsGetTopsQueryParams, _super);
    function DataPointsGetTopsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], DataPointsGetTopsQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe" }),
        __metadata("design:type", String)
    ], DataPointsGetTopsQueryParams.prototype, "timeframe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], DataPointsGetTopsQueryParams.prototype, "toDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DataPointsGetTopsQueryParams.prototype, "type", void 0);
    return DataPointsGetTopsQueryParams;
}(SpeakeasyBase));
export { DataPointsGetTopsQueryParams };
var DataPointsGetTopsRequest = /** @class */ (function (_super) {
    __extends(DataPointsGetTopsRequest, _super);
    function DataPointsGetTopsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataPointsGetTopsPathParams)
    ], DataPointsGetTopsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataPointsGetTopsQueryParams)
    ], DataPointsGetTopsRequest.prototype, "queryParams", void 0);
    return DataPointsGetTopsRequest;
}(SpeakeasyBase));
export { DataPointsGetTopsRequest };
var DataPointsGetTopsResponse = /** @class */ (function (_super) {
    __extends(DataPointsGetTopsResponse, _super);
    function DataPointsGetTopsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreDtoTopsTop)
    ], DataPointsGetTopsResponse.prototype, "apiCoreDtoTopsTop", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataPointsGetTopsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataPointsGetTopsResponse.prototype, "statusCode", void 0);
    return DataPointsGetTopsResponse;
}(SpeakeasyBase));
export { DataPointsGetTopsResponse };

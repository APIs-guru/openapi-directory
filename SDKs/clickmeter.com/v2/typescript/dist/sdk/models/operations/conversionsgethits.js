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
var ConversionsGetHitsPathParams = /** @class */ (function (_super) {
    __extends(ConversionsGetHitsPathParams, _super);
    function ConversionsGetHitsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversionId" }),
        __metadata("design:type", Number)
    ], ConversionsGetHitsPathParams.prototype, "conversionId", void 0);
    return ConversionsGetHitsPathParams;
}(SpeakeasyBase));
export { ConversionsGetHitsPathParams };
export var ConversionsGetHitsFilterEnum;
(function (ConversionsGetHitsFilterEnum) {
    ConversionsGetHitsFilterEnum["Spiders"] = "spiders";
    ConversionsGetHitsFilterEnum["Uniques"] = "uniques";
    ConversionsGetHitsFilterEnum["Nonuniques"] = "nonuniques";
    ConversionsGetHitsFilterEnum["Conversions"] = "conversions";
})(ConversionsGetHitsFilterEnum || (ConversionsGetHitsFilterEnum = {}));
export var ConversionsGetHitsTimeframeEnum;
(function (ConversionsGetHitsTimeframeEnum) {
    ConversionsGetHitsTimeframeEnum["Yesterday"] = "yesterday";
    ConversionsGetHitsTimeframeEnum["Last7"] = "last7";
    ConversionsGetHitsTimeframeEnum["Last30"] = "last30";
    ConversionsGetHitsTimeframeEnum["Lastmonth"] = "lastmonth";
    ConversionsGetHitsTimeframeEnum["Currentmonth"] = "currentmonth";
    ConversionsGetHitsTimeframeEnum["Previousmonth"] = "previousmonth";
    ConversionsGetHitsTimeframeEnum["Last90"] = "last90";
    ConversionsGetHitsTimeframeEnum["Last120"] = "last120";
    ConversionsGetHitsTimeframeEnum["Last180"] = "last180";
    ConversionsGetHitsTimeframeEnum["Custom"] = "custom";
})(ConversionsGetHitsTimeframeEnum || (ConversionsGetHitsTimeframeEnum = {}));
var ConversionsGetHitsQueryParams = /** @class */ (function (_super) {
    __extends(ConversionsGetHitsQueryParams, _super);
    function ConversionsGetHitsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ConversionsGetHitsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], ConversionsGetHitsQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ConversionsGetHitsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], ConversionsGetHitsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe" }),
        __metadata("design:type", String)
    ], ConversionsGetHitsQueryParams.prototype, "timeframe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], ConversionsGetHitsQueryParams.prototype, "toDay", void 0);
    return ConversionsGetHitsQueryParams;
}(SpeakeasyBase));
export { ConversionsGetHitsQueryParams };
var ConversionsGetHitsRequest = /** @class */ (function (_super) {
    __extends(ConversionsGetHitsRequest, _super);
    function ConversionsGetHitsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConversionsGetHitsPathParams)
    ], ConversionsGetHitsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConversionsGetHitsQueryParams)
    ], ConversionsGetHitsRequest.prototype, "queryParams", void 0);
    return ConversionsGetHitsRequest;
}(SpeakeasyBase));
export { ConversionsGetHitsRequest };
var ConversionsGetHitsResponse = /** @class */ (function (_super) {
    __extends(ConversionsGetHitsResponse, _super);
    function ConversionsGetHitsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreDtoClickStreamHitListPage)
    ], ConversionsGetHitsResponse.prototype, "apiCoreDtoClickStreamHitListPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConversionsGetHitsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConversionsGetHitsResponse.prototype, "statusCode", void 0);
    return ConversionsGetHitsResponse;
}(SpeakeasyBase));
export { ConversionsGetHitsResponse };

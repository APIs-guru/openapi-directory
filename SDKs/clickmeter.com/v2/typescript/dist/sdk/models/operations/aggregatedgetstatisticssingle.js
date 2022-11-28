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
export var AggregatedGetStatisticsSingleTimeFrameEnum;
(function (AggregatedGetStatisticsSingleTimeFrameEnum) {
    AggregatedGetStatisticsSingleTimeFrameEnum["Today"] = "today";
    AggregatedGetStatisticsSingleTimeFrameEnum["Yesterday"] = "yesterday";
    AggregatedGetStatisticsSingleTimeFrameEnum["Last7"] = "last7";
    AggregatedGetStatisticsSingleTimeFrameEnum["Last30"] = "last30";
    AggregatedGetStatisticsSingleTimeFrameEnum["Lastmonth"] = "lastmonth";
    AggregatedGetStatisticsSingleTimeFrameEnum["Currentmonth"] = "currentmonth";
    AggregatedGetStatisticsSingleTimeFrameEnum["Previousmonth"] = "previousmonth";
    AggregatedGetStatisticsSingleTimeFrameEnum["Last90"] = "last90";
    AggregatedGetStatisticsSingleTimeFrameEnum["Last120"] = "last120";
    AggregatedGetStatisticsSingleTimeFrameEnum["Last180"] = "last180";
    AggregatedGetStatisticsSingleTimeFrameEnum["Last12months"] = "last12months";
    AggregatedGetStatisticsSingleTimeFrameEnum["Lastyear"] = "lastyear";
    AggregatedGetStatisticsSingleTimeFrameEnum["Currentyear"] = "currentyear";
    AggregatedGetStatisticsSingleTimeFrameEnum["Beginning"] = "beginning";
    AggregatedGetStatisticsSingleTimeFrameEnum["Custom"] = "custom";
})(AggregatedGetStatisticsSingleTimeFrameEnum || (AggregatedGetStatisticsSingleTimeFrameEnum = {}));
var AggregatedGetStatisticsSingleQueryParams = /** @class */ (function (_super) {
    __extends(AggregatedGetStatisticsSingleQueryParams, _super);
    function AggregatedGetStatisticsSingleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], AggregatedGetStatisticsSingleQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hourly" }),
        __metadata("design:type", Boolean)
    ], AggregatedGetStatisticsSingleQueryParams.prototype, "hourly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onlyFavorites" }),
        __metadata("design:type", String)
    ], AggregatedGetStatisticsSingleQueryParams.prototype, "onlyFavorites", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeFrame" }),
        __metadata("design:type", String)
    ], AggregatedGetStatisticsSingleQueryParams.prototype, "timeFrame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], AggregatedGetStatisticsSingleQueryParams.prototype, "toDay", void 0);
    return AggregatedGetStatisticsSingleQueryParams;
}(SpeakeasyBase));
export { AggregatedGetStatisticsSingleQueryParams };
var AggregatedGetStatisticsSingleRequest = /** @class */ (function (_super) {
    __extends(AggregatedGetStatisticsSingleRequest, _super);
    function AggregatedGetStatisticsSingleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AggregatedGetStatisticsSingleQueryParams)
    ], AggregatedGetStatisticsSingleRequest.prototype, "queryParams", void 0);
    return AggregatedGetStatisticsSingleRequest;
}(SpeakeasyBase));
export { AggregatedGetStatisticsSingleRequest };
var AggregatedGetStatisticsSingleResponse = /** @class */ (function (_super) {
    __extends(AggregatedGetStatisticsSingleResponse, _super);
    function AggregatedGetStatisticsSingleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreDtoAggregatedAggregatedResult)
    ], AggregatedGetStatisticsSingleResponse.prototype, "apiCoreDtoAggregatedAggregatedResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AggregatedGetStatisticsSingleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AggregatedGetStatisticsSingleResponse.prototype, "statusCode", void 0);
    return AggregatedGetStatisticsSingleResponse;
}(SpeakeasyBase));
export { AggregatedGetStatisticsSingleResponse };

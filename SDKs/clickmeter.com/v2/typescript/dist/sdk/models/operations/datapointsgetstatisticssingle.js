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
var DataPointsGetStatisticsSinglePathParams = /** @class */ (function (_super) {
    __extends(DataPointsGetStatisticsSinglePathParams, _super);
    function DataPointsGetStatisticsSinglePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], DataPointsGetStatisticsSinglePathParams.prototype, "id", void 0);
    return DataPointsGetStatisticsSinglePathParams;
}(SpeakeasyBase));
export { DataPointsGetStatisticsSinglePathParams };
export var DataPointsGetStatisticsSingleTimeFrameEnum;
(function (DataPointsGetStatisticsSingleTimeFrameEnum) {
    DataPointsGetStatisticsSingleTimeFrameEnum["Today"] = "today";
    DataPointsGetStatisticsSingleTimeFrameEnum["Yesterday"] = "yesterday";
    DataPointsGetStatisticsSingleTimeFrameEnum["Last7"] = "last7";
    DataPointsGetStatisticsSingleTimeFrameEnum["Last30"] = "last30";
    DataPointsGetStatisticsSingleTimeFrameEnum["Lastmonth"] = "lastmonth";
    DataPointsGetStatisticsSingleTimeFrameEnum["Currentmonth"] = "currentmonth";
    DataPointsGetStatisticsSingleTimeFrameEnum["Previousmonth"] = "previousmonth";
    DataPointsGetStatisticsSingleTimeFrameEnum["Last90"] = "last90";
    DataPointsGetStatisticsSingleTimeFrameEnum["Last120"] = "last120";
    DataPointsGetStatisticsSingleTimeFrameEnum["Last180"] = "last180";
    DataPointsGetStatisticsSingleTimeFrameEnum["Last12months"] = "last12months";
    DataPointsGetStatisticsSingleTimeFrameEnum["Lastyear"] = "lastyear";
    DataPointsGetStatisticsSingleTimeFrameEnum["Currentyear"] = "currentyear";
    DataPointsGetStatisticsSingleTimeFrameEnum["Beginning"] = "beginning";
    DataPointsGetStatisticsSingleTimeFrameEnum["Custom"] = "custom";
})(DataPointsGetStatisticsSingleTimeFrameEnum || (DataPointsGetStatisticsSingleTimeFrameEnum = {}));
var DataPointsGetStatisticsSingleQueryParams = /** @class */ (function (_super) {
    __extends(DataPointsGetStatisticsSingleQueryParams, _super);
    function DataPointsGetStatisticsSingleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], DataPointsGetStatisticsSingleQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hourly" }),
        __metadata("design:type", Boolean)
    ], DataPointsGetStatisticsSingleQueryParams.prototype, "hourly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeFrame" }),
        __metadata("design:type", String)
    ], DataPointsGetStatisticsSingleQueryParams.prototype, "timeFrame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], DataPointsGetStatisticsSingleQueryParams.prototype, "toDay", void 0);
    return DataPointsGetStatisticsSingleQueryParams;
}(SpeakeasyBase));
export { DataPointsGetStatisticsSingleQueryParams };
var DataPointsGetStatisticsSingleRequest = /** @class */ (function (_super) {
    __extends(DataPointsGetStatisticsSingleRequest, _super);
    function DataPointsGetStatisticsSingleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataPointsGetStatisticsSinglePathParams)
    ], DataPointsGetStatisticsSingleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataPointsGetStatisticsSingleQueryParams)
    ], DataPointsGetStatisticsSingleRequest.prototype, "queryParams", void 0);
    return DataPointsGetStatisticsSingleRequest;
}(SpeakeasyBase));
export { DataPointsGetStatisticsSingleRequest };
var DataPointsGetStatisticsSingleResponse = /** @class */ (function (_super) {
    __extends(DataPointsGetStatisticsSingleResponse, _super);
    function DataPointsGetStatisticsSingleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreDtoAggregatedAggregatedResult)
    ], DataPointsGetStatisticsSingleResponse.prototype, "apiCoreDtoAggregatedAggregatedResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataPointsGetStatisticsSingleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataPointsGetStatisticsSingleResponse.prototype, "statusCode", void 0);
    return DataPointsGetStatisticsSingleResponse;
}(SpeakeasyBase));
export { DataPointsGetStatisticsSingleResponse };

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
var ConversionsGetStatisticsSinglePathParams = /** @class */ (function (_super) {
    __extends(ConversionsGetStatisticsSinglePathParams, _super);
    function ConversionsGetStatisticsSinglePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversionId" }),
        __metadata("design:type", Number)
    ], ConversionsGetStatisticsSinglePathParams.prototype, "conversionId", void 0);
    return ConversionsGetStatisticsSinglePathParams;
}(SpeakeasyBase));
export { ConversionsGetStatisticsSinglePathParams };
export var ConversionsGetStatisticsSingleTimeFrameEnum;
(function (ConversionsGetStatisticsSingleTimeFrameEnum) {
    ConversionsGetStatisticsSingleTimeFrameEnum["Today"] = "today";
    ConversionsGetStatisticsSingleTimeFrameEnum["Yesterday"] = "yesterday";
    ConversionsGetStatisticsSingleTimeFrameEnum["Last7"] = "last7";
    ConversionsGetStatisticsSingleTimeFrameEnum["Last30"] = "last30";
    ConversionsGetStatisticsSingleTimeFrameEnum["Lastmonth"] = "lastmonth";
    ConversionsGetStatisticsSingleTimeFrameEnum["Currentmonth"] = "currentmonth";
    ConversionsGetStatisticsSingleTimeFrameEnum["Previousmonth"] = "previousmonth";
    ConversionsGetStatisticsSingleTimeFrameEnum["Last90"] = "last90";
    ConversionsGetStatisticsSingleTimeFrameEnum["Last120"] = "last120";
    ConversionsGetStatisticsSingleTimeFrameEnum["Last180"] = "last180";
    ConversionsGetStatisticsSingleTimeFrameEnum["Last12months"] = "last12months";
    ConversionsGetStatisticsSingleTimeFrameEnum["Lastyear"] = "lastyear";
    ConversionsGetStatisticsSingleTimeFrameEnum["Currentyear"] = "currentyear";
    ConversionsGetStatisticsSingleTimeFrameEnum["Beginning"] = "beginning";
    ConversionsGetStatisticsSingleTimeFrameEnum["Custom"] = "custom";
})(ConversionsGetStatisticsSingleTimeFrameEnum || (ConversionsGetStatisticsSingleTimeFrameEnum = {}));
var ConversionsGetStatisticsSingleQueryParams = /** @class */ (function (_super) {
    __extends(ConversionsGetStatisticsSingleQueryParams, _super);
    function ConversionsGetStatisticsSingleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=favourite" }),
        __metadata("design:type", Boolean)
    ], ConversionsGetStatisticsSingleQueryParams.prototype, "favourite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], ConversionsGetStatisticsSingleQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hourly" }),
        __metadata("design:type", Boolean)
    ], ConversionsGetStatisticsSingleQueryParams.prototype, "hourly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], ConversionsGetStatisticsSingleQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeFrame" }),
        __metadata("design:type", String)
    ], ConversionsGetStatisticsSingleQueryParams.prototype, "timeFrame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], ConversionsGetStatisticsSingleQueryParams.prototype, "toDay", void 0);
    return ConversionsGetStatisticsSingleQueryParams;
}(SpeakeasyBase));
export { ConversionsGetStatisticsSingleQueryParams };
var ConversionsGetStatisticsSingleRequest = /** @class */ (function (_super) {
    __extends(ConversionsGetStatisticsSingleRequest, _super);
    function ConversionsGetStatisticsSingleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConversionsGetStatisticsSinglePathParams)
    ], ConversionsGetStatisticsSingleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConversionsGetStatisticsSingleQueryParams)
    ], ConversionsGetStatisticsSingleRequest.prototype, "queryParams", void 0);
    return ConversionsGetStatisticsSingleRequest;
}(SpeakeasyBase));
export { ConversionsGetStatisticsSingleRequest };
var ConversionsGetStatisticsSingleResponse = /** @class */ (function (_super) {
    __extends(ConversionsGetStatisticsSingleResponse, _super);
    function ConversionsGetStatisticsSingleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreDtoAggregatedAggregatedResult)
    ], ConversionsGetStatisticsSingleResponse.prototype, "apiCoreDtoAggregatedAggregatedResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConversionsGetStatisticsSingleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConversionsGetStatisticsSingleResponse.prototype, "statusCode", void 0);
    return ConversionsGetStatisticsSingleResponse;
}(SpeakeasyBase));
export { ConversionsGetStatisticsSingleResponse };

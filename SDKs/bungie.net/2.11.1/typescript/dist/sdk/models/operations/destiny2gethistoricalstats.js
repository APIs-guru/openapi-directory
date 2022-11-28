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
var Destiny2GetHistoricalStatsPathParams = /** @class */ (function (_super) {
    __extends(Destiny2GetHistoricalStatsPathParams, _super);
    function Destiny2GetHistoricalStatsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=characterId" }),
        __metadata("design:type", Number)
    ], Destiny2GetHistoricalStatsPathParams.prototype, "characterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" }),
        __metadata("design:type", Number)
    ], Destiny2GetHistoricalStatsPathParams.prototype, "destinyMembershipId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" }),
        __metadata("design:type", Number)
    ], Destiny2GetHistoricalStatsPathParams.prototype, "membershipType", void 0);
    return Destiny2GetHistoricalStatsPathParams;
}(SpeakeasyBase));
export { Destiny2GetHistoricalStatsPathParams };
var Destiny2GetHistoricalStatsQueryParams = /** @class */ (function (_super) {
    __extends(Destiny2GetHistoricalStatsQueryParams, _super);
    function Destiny2GetHistoricalStatsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dayend" }),
        __metadata("design:type", Date)
    ], Destiny2GetHistoricalStatsQueryParams.prototype, "dayend", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=daystart" }),
        __metadata("design:type", Date)
    ], Destiny2GetHistoricalStatsQueryParams.prototype, "daystart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=groups" }),
        __metadata("design:type", Array)
    ], Destiny2GetHistoricalStatsQueryParams.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=modes" }),
        __metadata("design:type", Array)
    ], Destiny2GetHistoricalStatsQueryParams.prototype, "modes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodType" }),
        __metadata("design:type", Number)
    ], Destiny2GetHistoricalStatsQueryParams.prototype, "periodType", void 0);
    return Destiny2GetHistoricalStatsQueryParams;
}(SpeakeasyBase));
export { Destiny2GetHistoricalStatsQueryParams };
var Destiny2GetHistoricalStatsRequest = /** @class */ (function (_super) {
    __extends(Destiny2GetHistoricalStatsRequest, _super);
    function Destiny2GetHistoricalStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2GetHistoricalStatsPathParams)
    ], Destiny2GetHistoricalStatsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2GetHistoricalStatsQueryParams)
    ], Destiny2GetHistoricalStatsRequest.prototype, "queryParams", void 0);
    return Destiny2GetHistoricalStatsRequest;
}(SpeakeasyBase));
export { Destiny2GetHistoricalStatsRequest };
var Destiny2GetHistoricalStatsResponse = /** @class */ (function (_super) {
    __extends(Destiny2GetHistoricalStatsResponse, _super);
    function Destiny2GetHistoricalStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], Destiny2GetHistoricalStatsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Destiny2GetHistoricalStatsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Destiny2GetHistoricalStatsResponse.prototype, "statusCode", void 0);
    return Destiny2GetHistoricalStatsResponse;
}(SpeakeasyBase));
export { Destiny2GetHistoricalStatsResponse };

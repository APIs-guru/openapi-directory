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
var Destiny2GetClanAggregateStatsPathParams = /** @class */ (function (_super) {
    __extends(Destiny2GetClanAggregateStatsPathParams, _super);
    function Destiny2GetClanAggregateStatsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", Number)
    ], Destiny2GetClanAggregateStatsPathParams.prototype, "groupId", void 0);
    return Destiny2GetClanAggregateStatsPathParams;
}(SpeakeasyBase));
export { Destiny2GetClanAggregateStatsPathParams };
var Destiny2GetClanAggregateStatsQueryParams = /** @class */ (function (_super) {
    __extends(Destiny2GetClanAggregateStatsQueryParams, _super);
    function Destiny2GetClanAggregateStatsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modes" }),
        __metadata("design:type", String)
    ], Destiny2GetClanAggregateStatsQueryParams.prototype, "modes", void 0);
    return Destiny2GetClanAggregateStatsQueryParams;
}(SpeakeasyBase));
export { Destiny2GetClanAggregateStatsQueryParams };
var Destiny2GetClanAggregateStatsRequest = /** @class */ (function (_super) {
    __extends(Destiny2GetClanAggregateStatsRequest, _super);
    function Destiny2GetClanAggregateStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2GetClanAggregateStatsPathParams)
    ], Destiny2GetClanAggregateStatsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2GetClanAggregateStatsQueryParams)
    ], Destiny2GetClanAggregateStatsRequest.prototype, "queryParams", void 0);
    return Destiny2GetClanAggregateStatsRequest;
}(SpeakeasyBase));
export { Destiny2GetClanAggregateStatsRequest };
var Destiny2GetClanAggregateStatsResponse = /** @class */ (function (_super) {
    __extends(Destiny2GetClanAggregateStatsResponse, _super);
    function Destiny2GetClanAggregateStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], Destiny2GetClanAggregateStatsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Destiny2GetClanAggregateStatsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Destiny2GetClanAggregateStatsResponse.prototype, "statusCode", void 0);
    return Destiny2GetClanAggregateStatsResponse;
}(SpeakeasyBase));
export { Destiny2GetClanAggregateStatsResponse };

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
var Destiny2GetDestinyAggregateActivityStatsPathParams = /** @class */ (function (_super) {
    __extends(Destiny2GetDestinyAggregateActivityStatsPathParams, _super);
    function Destiny2GetDestinyAggregateActivityStatsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=characterId" }),
        __metadata("design:type", Number)
    ], Destiny2GetDestinyAggregateActivityStatsPathParams.prototype, "characterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" }),
        __metadata("design:type", Number)
    ], Destiny2GetDestinyAggregateActivityStatsPathParams.prototype, "destinyMembershipId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" }),
        __metadata("design:type", Number)
    ], Destiny2GetDestinyAggregateActivityStatsPathParams.prototype, "membershipType", void 0);
    return Destiny2GetDestinyAggregateActivityStatsPathParams;
}(SpeakeasyBase));
export { Destiny2GetDestinyAggregateActivityStatsPathParams };
var Destiny2GetDestinyAggregateActivityStatsRequest = /** @class */ (function (_super) {
    __extends(Destiny2GetDestinyAggregateActivityStatsRequest, _super);
    function Destiny2GetDestinyAggregateActivityStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2GetDestinyAggregateActivityStatsPathParams)
    ], Destiny2GetDestinyAggregateActivityStatsRequest.prototype, "pathParams", void 0);
    return Destiny2GetDestinyAggregateActivityStatsRequest;
}(SpeakeasyBase));
export { Destiny2GetDestinyAggregateActivityStatsRequest };
var Destiny2GetDestinyAggregateActivityStatsResponse = /** @class */ (function (_super) {
    __extends(Destiny2GetDestinyAggregateActivityStatsResponse, _super);
    function Destiny2GetDestinyAggregateActivityStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], Destiny2GetDestinyAggregateActivityStatsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Destiny2GetDestinyAggregateActivityStatsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Destiny2GetDestinyAggregateActivityStatsResponse.prototype, "statusCode", void 0);
    return Destiny2GetDestinyAggregateActivityStatsResponse;
}(SpeakeasyBase));
export { Destiny2GetDestinyAggregateActivityStatsResponse };

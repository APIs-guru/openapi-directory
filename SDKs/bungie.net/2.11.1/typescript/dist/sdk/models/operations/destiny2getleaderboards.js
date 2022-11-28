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
var Destiny2GetLeaderboardsPathParams = /** @class */ (function (_super) {
    __extends(Destiny2GetLeaderboardsPathParams, _super);
    function Destiny2GetLeaderboardsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" }),
        __metadata("design:type", Number)
    ], Destiny2GetLeaderboardsPathParams.prototype, "destinyMembershipId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" }),
        __metadata("design:type", Number)
    ], Destiny2GetLeaderboardsPathParams.prototype, "membershipType", void 0);
    return Destiny2GetLeaderboardsPathParams;
}(SpeakeasyBase));
export { Destiny2GetLeaderboardsPathParams };
var Destiny2GetLeaderboardsQueryParams = /** @class */ (function (_super) {
    __extends(Destiny2GetLeaderboardsQueryParams, _super);
    function Destiny2GetLeaderboardsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxtop" }),
        __metadata("design:type", Number)
    ], Destiny2GetLeaderboardsQueryParams.prototype, "maxtop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modes" }),
        __metadata("design:type", String)
    ], Destiny2GetLeaderboardsQueryParams.prototype, "modes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=statid" }),
        __metadata("design:type", String)
    ], Destiny2GetLeaderboardsQueryParams.prototype, "statid", void 0);
    return Destiny2GetLeaderboardsQueryParams;
}(SpeakeasyBase));
export { Destiny2GetLeaderboardsQueryParams };
var Destiny2GetLeaderboardsRequest = /** @class */ (function (_super) {
    __extends(Destiny2GetLeaderboardsRequest, _super);
    function Destiny2GetLeaderboardsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2GetLeaderboardsPathParams)
    ], Destiny2GetLeaderboardsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2GetLeaderboardsQueryParams)
    ], Destiny2GetLeaderboardsRequest.prototype, "queryParams", void 0);
    return Destiny2GetLeaderboardsRequest;
}(SpeakeasyBase));
export { Destiny2GetLeaderboardsRequest };
var Destiny2GetLeaderboardsResponse = /** @class */ (function (_super) {
    __extends(Destiny2GetLeaderboardsResponse, _super);
    function Destiny2GetLeaderboardsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], Destiny2GetLeaderboardsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Destiny2GetLeaderboardsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Destiny2GetLeaderboardsResponse.prototype, "statusCode", void 0);
    return Destiny2GetLeaderboardsResponse;
}(SpeakeasyBase));
export { Destiny2GetLeaderboardsResponse };

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
var Destiny2GetClanLeaderboardsPathParams = /** @class */ (function (_super) {
    __extends(Destiny2GetClanLeaderboardsPathParams, _super);
    function Destiny2GetClanLeaderboardsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", Number)
    ], Destiny2GetClanLeaderboardsPathParams.prototype, "groupId", void 0);
    return Destiny2GetClanLeaderboardsPathParams;
}(SpeakeasyBase));
export { Destiny2GetClanLeaderboardsPathParams };
var Destiny2GetClanLeaderboardsQueryParams = /** @class */ (function (_super) {
    __extends(Destiny2GetClanLeaderboardsQueryParams, _super);
    function Destiny2GetClanLeaderboardsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxtop" }),
        __metadata("design:type", Number)
    ], Destiny2GetClanLeaderboardsQueryParams.prototype, "maxtop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modes" }),
        __metadata("design:type", String)
    ], Destiny2GetClanLeaderboardsQueryParams.prototype, "modes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=statid" }),
        __metadata("design:type", String)
    ], Destiny2GetClanLeaderboardsQueryParams.prototype, "statid", void 0);
    return Destiny2GetClanLeaderboardsQueryParams;
}(SpeakeasyBase));
export { Destiny2GetClanLeaderboardsQueryParams };
var Destiny2GetClanLeaderboardsRequest = /** @class */ (function (_super) {
    __extends(Destiny2GetClanLeaderboardsRequest, _super);
    function Destiny2GetClanLeaderboardsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2GetClanLeaderboardsPathParams)
    ], Destiny2GetClanLeaderboardsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2GetClanLeaderboardsQueryParams)
    ], Destiny2GetClanLeaderboardsRequest.prototype, "queryParams", void 0);
    return Destiny2GetClanLeaderboardsRequest;
}(SpeakeasyBase));
export { Destiny2GetClanLeaderboardsRequest };
var Destiny2GetClanLeaderboardsResponse = /** @class */ (function (_super) {
    __extends(Destiny2GetClanLeaderboardsResponse, _super);
    function Destiny2GetClanLeaderboardsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], Destiny2GetClanLeaderboardsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Destiny2GetClanLeaderboardsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Destiny2GetClanLeaderboardsResponse.prototype, "statusCode", void 0);
    return Destiny2GetClanLeaderboardsResponse;
}(SpeakeasyBase));
export { Destiny2GetClanLeaderboardsResponse };

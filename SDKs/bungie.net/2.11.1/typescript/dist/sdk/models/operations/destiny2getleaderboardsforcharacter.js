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
var Destiny2GetLeaderboardsForCharacterPathParams = /** @class */ (function (_super) {
    __extends(Destiny2GetLeaderboardsForCharacterPathParams, _super);
    function Destiny2GetLeaderboardsForCharacterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=characterId" }),
        __metadata("design:type", Number)
    ], Destiny2GetLeaderboardsForCharacterPathParams.prototype, "characterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" }),
        __metadata("design:type", Number)
    ], Destiny2GetLeaderboardsForCharacterPathParams.prototype, "destinyMembershipId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" }),
        __metadata("design:type", Number)
    ], Destiny2GetLeaderboardsForCharacterPathParams.prototype, "membershipType", void 0);
    return Destiny2GetLeaderboardsForCharacterPathParams;
}(SpeakeasyBase));
export { Destiny2GetLeaderboardsForCharacterPathParams };
var Destiny2GetLeaderboardsForCharacterQueryParams = /** @class */ (function (_super) {
    __extends(Destiny2GetLeaderboardsForCharacterQueryParams, _super);
    function Destiny2GetLeaderboardsForCharacterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxtop" }),
        __metadata("design:type", Number)
    ], Destiny2GetLeaderboardsForCharacterQueryParams.prototype, "maxtop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modes" }),
        __metadata("design:type", String)
    ], Destiny2GetLeaderboardsForCharacterQueryParams.prototype, "modes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=statid" }),
        __metadata("design:type", String)
    ], Destiny2GetLeaderboardsForCharacterQueryParams.prototype, "statid", void 0);
    return Destiny2GetLeaderboardsForCharacterQueryParams;
}(SpeakeasyBase));
export { Destiny2GetLeaderboardsForCharacterQueryParams };
var Destiny2GetLeaderboardsForCharacterRequest = /** @class */ (function (_super) {
    __extends(Destiny2GetLeaderboardsForCharacterRequest, _super);
    function Destiny2GetLeaderboardsForCharacterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2GetLeaderboardsForCharacterPathParams)
    ], Destiny2GetLeaderboardsForCharacterRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2GetLeaderboardsForCharacterQueryParams)
    ], Destiny2GetLeaderboardsForCharacterRequest.prototype, "queryParams", void 0);
    return Destiny2GetLeaderboardsForCharacterRequest;
}(SpeakeasyBase));
export { Destiny2GetLeaderboardsForCharacterRequest };
var Destiny2GetLeaderboardsForCharacterResponse = /** @class */ (function (_super) {
    __extends(Destiny2GetLeaderboardsForCharacterResponse, _super);
    function Destiny2GetLeaderboardsForCharacterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], Destiny2GetLeaderboardsForCharacterResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Destiny2GetLeaderboardsForCharacterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Destiny2GetLeaderboardsForCharacterResponse.prototype, "statusCode", void 0);
    return Destiny2GetLeaderboardsForCharacterResponse;
}(SpeakeasyBase));
export { Destiny2GetLeaderboardsForCharacterResponse };

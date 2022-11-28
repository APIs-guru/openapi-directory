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
var GetAccountsNameVideoChannelsPathParams = /** @class */ (function (_super) {
    __extends(GetAccountsNameVideoChannelsPathParams, _super);
    function GetAccountsNameVideoChannelsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GetAccountsNameVideoChannelsPathParams.prototype, "name", void 0);
    return GetAccountsNameVideoChannelsPathParams;
}(SpeakeasyBase));
export { GetAccountsNameVideoChannelsPathParams };
var GetAccountsNameVideoChannelsQueryParams = /** @class */ (function (_super) {
    __extends(GetAccountsNameVideoChannelsQueryParams, _super);
    function GetAccountsNameVideoChannelsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], GetAccountsNameVideoChannelsQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetAccountsNameVideoChannelsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetAccountsNameVideoChannelsQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=withStats" }),
        __metadata("design:type", Boolean)
    ], GetAccountsNameVideoChannelsQueryParams.prototype, "withStats", void 0);
    return GetAccountsNameVideoChannelsQueryParams;
}(SpeakeasyBase));
export { GetAccountsNameVideoChannelsQueryParams };
var GetAccountsNameVideoChannelsRequest = /** @class */ (function (_super) {
    __extends(GetAccountsNameVideoChannelsRequest, _super);
    function GetAccountsNameVideoChannelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsNameVideoChannelsPathParams)
    ], GetAccountsNameVideoChannelsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsNameVideoChannelsQueryParams)
    ], GetAccountsNameVideoChannelsRequest.prototype, "queryParams", void 0);
    return GetAccountsNameVideoChannelsRequest;
}(SpeakeasyBase));
export { GetAccountsNameVideoChannelsRequest };
var GetAccountsNameVideoChannelsResponse = /** @class */ (function (_super) {
    __extends(GetAccountsNameVideoChannelsResponse, _super);
    function GetAccountsNameVideoChannelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountsNameVideoChannelsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountsNameVideoChannelsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetAccountsNameVideoChannelsResponse.prototype, "videoChannelList", void 0);
    return GetAccountsNameVideoChannelsResponse;
}(SpeakeasyBase));
export { GetAccountsNameVideoChannelsResponse };

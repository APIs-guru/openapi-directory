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
var GetNextPlaybackItemPathParams = /** @class */ (function (_super) {
    __extends(GetNextPlaybackItemPathParams, _super);
    function GetNextPlaybackItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetNextPlaybackItemPathParams.prototype, "itemId", void 0);
    return GetNextPlaybackItemPathParams;
}(SpeakeasyBase));
export { GetNextPlaybackItemPathParams };
export var GetNextPlaybackItemExpandEnum;
(function (GetNextPlaybackItemExpandEnum) {
    GetNextPlaybackItemExpandEnum["Parent"] = "parent";
    GetNextPlaybackItemExpandEnum["Ancestors"] = "ancestors";
})(GetNextPlaybackItemExpandEnum || (GetNextPlaybackItemExpandEnum = {}));
var GetNextPlaybackItemQueryParams = /** @class */ (function (_super) {
    __extends(GetNextPlaybackItemQueryParams, _super);
    function GetNextPlaybackItemQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" }),
        __metadata("design:type", String)
    ], GetNextPlaybackItemQueryParams.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" }),
        __metadata("design:type", String)
    ], GetNextPlaybackItemQueryParams.prototype, "expand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], GetNextPlaybackItemQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetNextPlaybackItemQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_rating" }),
        __metadata("design:type", String)
    ], GetNextPlaybackItemQueryParams.prototype, "maxRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=segments" }),
        __metadata("design:type", Array)
    ], GetNextPlaybackItemQueryParams.prototype, "segments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sub" }),
        __metadata("design:type", String)
    ], GetNextPlaybackItemQueryParams.prototype, "sub", void 0);
    return GetNextPlaybackItemQueryParams;
}(SpeakeasyBase));
export { GetNextPlaybackItemQueryParams };
var GetNextPlaybackItemSecurity = /** @class */ (function (_super) {
    __extends(GetNextPlaybackItemSecurity, _super);
    function GetNextPlaybackItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeProfileAuth)
    ], GetNextPlaybackItemSecurity.prototype, "profileAuth", void 0);
    return GetNextPlaybackItemSecurity;
}(SpeakeasyBase));
export { GetNextPlaybackItemSecurity };
var GetNextPlaybackItemRequest = /** @class */ (function (_super) {
    __extends(GetNextPlaybackItemRequest, _super);
    function GetNextPlaybackItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNextPlaybackItemPathParams)
    ], GetNextPlaybackItemRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNextPlaybackItemQueryParams)
    ], GetNextPlaybackItemRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNextPlaybackItemSecurity)
    ], GetNextPlaybackItemRequest.prototype, "security", void 0);
    return GetNextPlaybackItemRequest;
}(SpeakeasyBase));
export { GetNextPlaybackItemRequest };
var GetNextPlaybackItemResponse = /** @class */ (function (_super) {
    __extends(GetNextPlaybackItemResponse, _super);
    function GetNextPlaybackItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNextPlaybackItemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NextPlaybackItem)
    ], GetNextPlaybackItemResponse.prototype, "nextPlaybackItem", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetNextPlaybackItemResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNextPlaybackItemResponse.prototype, "statusCode", void 0);
    return GetNextPlaybackItemResponse;
}(SpeakeasyBase));
export { GetNextPlaybackItemResponse };

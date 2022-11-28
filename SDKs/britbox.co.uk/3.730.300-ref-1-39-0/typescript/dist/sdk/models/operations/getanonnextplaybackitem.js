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
var GetAnonNextPlaybackItemPathParams = /** @class */ (function (_super) {
    __extends(GetAnonNextPlaybackItemPathParams, _super);
    function GetAnonNextPlaybackItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetAnonNextPlaybackItemPathParams.prototype, "itemId", void 0);
    return GetAnonNextPlaybackItemPathParams;
}(SpeakeasyBase));
export { GetAnonNextPlaybackItemPathParams };
export var GetAnonNextPlaybackItemExpandEnum;
(function (GetAnonNextPlaybackItemExpandEnum) {
    GetAnonNextPlaybackItemExpandEnum["Parent"] = "parent";
    GetAnonNextPlaybackItemExpandEnum["Ancestors"] = "ancestors";
})(GetAnonNextPlaybackItemExpandEnum || (GetAnonNextPlaybackItemExpandEnum = {}));
var GetAnonNextPlaybackItemQueryParams = /** @class */ (function (_super) {
    __extends(GetAnonNextPlaybackItemQueryParams, _super);
    function GetAnonNextPlaybackItemQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" }),
        __metadata("design:type", String)
    ], GetAnonNextPlaybackItemQueryParams.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" }),
        __metadata("design:type", String)
    ], GetAnonNextPlaybackItemQueryParams.prototype, "expand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], GetAnonNextPlaybackItemQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetAnonNextPlaybackItemQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_rating" }),
        __metadata("design:type", String)
    ], GetAnonNextPlaybackItemQueryParams.prototype, "maxRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=segments" }),
        __metadata("design:type", Array)
    ], GetAnonNextPlaybackItemQueryParams.prototype, "segments", void 0);
    return GetAnonNextPlaybackItemQueryParams;
}(SpeakeasyBase));
export { GetAnonNextPlaybackItemQueryParams };
var GetAnonNextPlaybackItemRequest = /** @class */ (function (_super) {
    __extends(GetAnonNextPlaybackItemRequest, _super);
    function GetAnonNextPlaybackItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnonNextPlaybackItemPathParams)
    ], GetAnonNextPlaybackItemRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnonNextPlaybackItemQueryParams)
    ], GetAnonNextPlaybackItemRequest.prototype, "queryParams", void 0);
    return GetAnonNextPlaybackItemRequest;
}(SpeakeasyBase));
export { GetAnonNextPlaybackItemRequest };
var GetAnonNextPlaybackItemResponse = /** @class */ (function (_super) {
    __extends(GetAnonNextPlaybackItemResponse, _super);
    function GetAnonNextPlaybackItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAnonNextPlaybackItemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NextPlaybackItem)
    ], GetAnonNextPlaybackItemResponse.prototype, "nextPlaybackItem", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetAnonNextPlaybackItemResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAnonNextPlaybackItemResponse.prototype, "statusCode", void 0);
    return GetAnonNextPlaybackItemResponse;
}(SpeakeasyBase));
export { GetAnonNextPlaybackItemResponse };

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
export var GetLiveStreamsSortOrderEnum;
(function (GetLiveStreamsSortOrderEnum) {
    GetLiveStreamsSortOrderEnum["Asc"] = "asc";
    GetLiveStreamsSortOrderEnum["Desc"] = "desc";
})(GetLiveStreamsSortOrderEnum || (GetLiveStreamsSortOrderEnum = {}));
var GetLiveStreamsQueryParams = /** @class */ (function (_super) {
    __extends(GetLiveStreamsQueryParams, _super);
    function GetLiveStreamsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentPage" }),
        __metadata("design:type", Number)
    ], GetLiveStreamsQueryParams.prototype, "currentPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetLiveStreamsQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetLiveStreamsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], GetLiveStreamsQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], GetLiveStreamsQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=streamKey" }),
        __metadata("design:type", String)
    ], GetLiveStreamsQueryParams.prototype, "streamKey", void 0);
    return GetLiveStreamsQueryParams;
}(SpeakeasyBase));
export { GetLiveStreamsQueryParams };
var GetLiveStreamsSecurity = /** @class */ (function (_super) {
    __extends(GetLiveStreamsSecurity, _super);
    function GetLiveStreamsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetLiveStreamsSecurity.prototype, "bearerAuth", void 0);
    return GetLiveStreamsSecurity;
}(SpeakeasyBase));
export { GetLiveStreamsSecurity };
var GetLiveStreamsRequest = /** @class */ (function (_super) {
    __extends(GetLiveStreamsRequest, _super);
    function GetLiveStreamsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLiveStreamsQueryParams)
    ], GetLiveStreamsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLiveStreamsSecurity)
    ], GetLiveStreamsRequest.prototype, "security", void 0);
    return GetLiveStreamsRequest;
}(SpeakeasyBase));
export { GetLiveStreamsRequest };
var GetLiveStreamsResponse = /** @class */ (function (_super) {
    __extends(GetLiveStreamsResponse, _super);
    function GetLiveStreamsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLiveStreamsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLiveStreamsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LiveStreamListResponse)
    ], GetLiveStreamsResponse.prototype, "liveStreamListResponse", void 0);
    return GetLiveStreamsResponse;
}(SpeakeasyBase));
export { GetLiveStreamsResponse };

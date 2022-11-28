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
var GetVideoCaptionsPathParams = /** @class */ (function (_super) {
    __extends(GetVideoCaptionsPathParams, _super);
    function GetVideoCaptionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Object)
    ], GetVideoCaptionsPathParams.prototype, "id", void 0);
    return GetVideoCaptionsPathParams;
}(SpeakeasyBase));
export { GetVideoCaptionsPathParams };
var GetVideoCaptions200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetVideoCaptions200ApplicationJson, _super);
    function GetVideoCaptions200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Array)
    ], GetVideoCaptions200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetVideoCaptions200ApplicationJson.prototype, "total", void 0);
    return GetVideoCaptions200ApplicationJson;
}(SpeakeasyBase));
export { GetVideoCaptions200ApplicationJson };
var GetVideoCaptionsRequest = /** @class */ (function (_super) {
    __extends(GetVideoCaptionsRequest, _super);
    function GetVideoCaptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideoCaptionsPathParams)
    ], GetVideoCaptionsRequest.prototype, "pathParams", void 0);
    return GetVideoCaptionsRequest;
}(SpeakeasyBase));
export { GetVideoCaptionsRequest };
var GetVideoCaptionsResponse = /** @class */ (function (_super) {
    __extends(GetVideoCaptionsResponse, _super);
    function GetVideoCaptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVideoCaptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVideoCaptionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideoCaptions200ApplicationJson)
    ], GetVideoCaptionsResponse.prototype, "getVideoCaptions200ApplicationJsonObject", void 0);
    return GetVideoCaptionsResponse;
}(SpeakeasyBase));
export { GetVideoCaptionsResponse };

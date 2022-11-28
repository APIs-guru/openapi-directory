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
var GetContainersIdStatusPathParams = /** @class */ (function (_super) {
    __extends(GetContainersIdStatusPathParams, _super);
    function GetContainersIdStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetContainersIdStatusPathParams.prototype, "id", void 0);
    return GetContainersIdStatusPathParams;
}(SpeakeasyBase));
export { GetContainersIdStatusPathParams };
var GetContainersIdStatusHeaders = /** @class */ (function (_super) {
    __extends(GetContainersIdStatusHeaders, _super);
    function GetContainersIdStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" }),
        __metadata("design:type", String)
    ], GetContainersIdStatusHeaders.prototype, "xAuthProjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" }),
        __metadata("design:type", String)
    ], GetContainersIdStatusHeaders.prototype, "xAuthToken", void 0);
    return GetContainersIdStatusHeaders;
}(SpeakeasyBase));
export { GetContainersIdStatusHeaders };
var GetContainersIdStatusRequest = /** @class */ (function (_super) {
    __extends(GetContainersIdStatusRequest, _super);
    function GetContainersIdStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetContainersIdStatusPathParams)
    ], GetContainersIdStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetContainersIdStatusHeaders)
    ], GetContainersIdStatusRequest.prototype, "headers", void 0);
    return GetContainersIdStatusRequest;
}(SpeakeasyBase));
export { GetContainersIdStatusRequest };
var GetContainersIdStatusResponse = /** @class */ (function (_super) {
    __extends(GetContainersIdStatusResponse, _super);
    function GetContainersIdStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetContainersIdStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetContainersIdStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetContainersIdStatusResponse.prototype, "getContainerStatus", void 0);
    return GetContainersIdStatusResponse;
}(SpeakeasyBase));
export { GetContainersIdStatusResponse };

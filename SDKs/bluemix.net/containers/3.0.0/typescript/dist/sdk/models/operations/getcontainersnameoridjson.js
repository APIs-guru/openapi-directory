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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var GetContainersNameOrIdJsonPathParams = /** @class */ (function (_super) {
    __extends(GetContainersNameOrIdJsonPathParams, _super);
    function GetContainersNameOrIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" }),
        __metadata("design:type", String)
    ], GetContainersNameOrIdJsonPathParams.prototype, "nameOrId", void 0);
    return GetContainersNameOrIdJsonPathParams;
}(SpeakeasyBase));
export { GetContainersNameOrIdJsonPathParams };
var GetContainersNameOrIdJsonHeaders = /** @class */ (function (_super) {
    __extends(GetContainersNameOrIdJsonHeaders, _super);
    function GetContainersNameOrIdJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" }),
        __metadata("design:type", String)
    ], GetContainersNameOrIdJsonHeaders.prototype, "xAuthProjectId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" }),
        __metadata("design:type", String)
    ], GetContainersNameOrIdJsonHeaders.prototype, "xAuthToken", void 0);
    return GetContainersNameOrIdJsonHeaders;
}(SpeakeasyBase));
export { GetContainersNameOrIdJsonHeaders };
var GetContainersNameOrIdJsonRequest = /** @class */ (function (_super) {
    __extends(GetContainersNameOrIdJsonRequest, _super);
    function GetContainersNameOrIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetContainersNameOrIdJsonPathParams)
    ], GetContainersNameOrIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetContainersNameOrIdJsonHeaders)
    ], GetContainersNameOrIdJsonRequest.prototype, "headers", void 0);
    return GetContainersNameOrIdJsonRequest;
}(SpeakeasyBase));
export { GetContainersNameOrIdJsonRequest };
var GetContainersNameOrIdJsonResponse = /** @class */ (function (_super) {
    __extends(GetContainersNameOrIdJsonResponse, _super);
    function GetContainersNameOrIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetContainersNameOrIdJsonResponse.prototype, "containerInfo", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetContainersNameOrIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetContainersNameOrIdJsonResponse.prototype, "statusCode", void 0);
    return GetContainersNameOrIdJsonResponse;
}(SpeakeasyBase));
export { GetContainersNameOrIdJsonResponse };

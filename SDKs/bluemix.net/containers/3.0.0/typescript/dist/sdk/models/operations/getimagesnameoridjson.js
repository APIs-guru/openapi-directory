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
var GetImagesNameOrIdJsonPathParams = /** @class */ (function (_super) {
    __extends(GetImagesNameOrIdJsonPathParams, _super);
    function GetImagesNameOrIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" }),
        __metadata("design:type", String)
    ], GetImagesNameOrIdJsonPathParams.prototype, "nameOrId", void 0);
    return GetImagesNameOrIdJsonPathParams;
}(SpeakeasyBase));
export { GetImagesNameOrIdJsonPathParams };
var GetImagesNameOrIdJsonHeaders = /** @class */ (function (_super) {
    __extends(GetImagesNameOrIdJsonHeaders, _super);
    function GetImagesNameOrIdJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" }),
        __metadata("design:type", String)
    ], GetImagesNameOrIdJsonHeaders.prototype, "xAuthProjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" }),
        __metadata("design:type", String)
    ], GetImagesNameOrIdJsonHeaders.prototype, "xAuthToken", void 0);
    return GetImagesNameOrIdJsonHeaders;
}(SpeakeasyBase));
export { GetImagesNameOrIdJsonHeaders };
var GetImagesNameOrIdJsonRequest = /** @class */ (function (_super) {
    __extends(GetImagesNameOrIdJsonRequest, _super);
    function GetImagesNameOrIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetImagesNameOrIdJsonPathParams)
    ], GetImagesNameOrIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetImagesNameOrIdJsonHeaders)
    ], GetImagesNameOrIdJsonRequest.prototype, "headers", void 0);
    return GetImagesNameOrIdJsonRequest;
}(SpeakeasyBase));
export { GetImagesNameOrIdJsonRequest };
var GetImagesNameOrIdJsonResponse = /** @class */ (function (_super) {
    __extends(GetImagesNameOrIdJsonResponse, _super);
    function GetImagesNameOrIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetImagesNameOrIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ImageDetail)
    ], GetImagesNameOrIdJsonResponse.prototype, "imageDetail", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetImagesNameOrIdJsonResponse.prototype, "statusCode", void 0);
    return GetImagesNameOrIdJsonResponse;
}(SpeakeasyBase));
export { GetImagesNameOrIdJsonResponse };

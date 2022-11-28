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
var GetSubUserKeysGetSubUserKeysGetQueryParams = /** @class */ (function (_super) {
    __extends(GetSubUserKeysGetSubUserKeysGetQueryParams, _super);
    function GetSubUserKeysGetSubUserKeysGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apiID" }),
        __metadata("design:type", String)
    ], GetSubUserKeysGetSubUserKeysGetQueryParams.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apiKey" }),
        __metadata("design:type", String)
    ], GetSubUserKeysGetSubUserKeysGetQueryParams.prototype, "apiKey", void 0);
    return GetSubUserKeysGetSubUserKeysGetQueryParams;
}(SpeakeasyBase));
export { GetSubUserKeysGetSubUserKeysGetQueryParams };
var GetSubUserKeysGetSubUserKeysGetRequest = /** @class */ (function (_super) {
    __extends(GetSubUserKeysGetSubUserKeysGetRequest, _super);
    function GetSubUserKeysGetSubUserKeysGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSubUserKeysGetSubUserKeysGetQueryParams)
    ], GetSubUserKeysGetSubUserKeysGetRequest.prototype, "queryParams", void 0);
    return GetSubUserKeysGetSubUserKeysGetRequest;
}(SpeakeasyBase));
export { GetSubUserKeysGetSubUserKeysGetRequest };
var GetSubUserKeysGetSubUserKeysGetResponse = /** @class */ (function (_super) {
    __extends(GetSubUserKeysGetSubUserKeysGetResponse, _super);
    function GetSubUserKeysGetSubUserKeysGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSubUserKeysGetSubUserKeysGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GenericResponse)
    ], GetSubUserKeysGetSubUserKeysGetResponse.prototype, "genericResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], GetSubUserKeysGetSubUserKeysGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSubUserKeysGetSubUserKeysGetResponse.prototype, "statusCode", void 0);
    return GetSubUserKeysGetSubUserKeysGetResponse;
}(SpeakeasyBase));
export { GetSubUserKeysGetSubUserKeysGetResponse };

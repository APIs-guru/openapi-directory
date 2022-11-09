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
import * as shared from "../shared";
var GetSdkKeysPathParams = /** @class */ (function (_super) {
    __extends(GetSdkKeysPathParams, _super);
    function GetSdkKeysPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=configId" }),
        __metadata("design:type", String)
    ], GetSdkKeysPathParams.prototype, "configId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" }),
        __metadata("design:type", String)
    ], GetSdkKeysPathParams.prototype, "environmentId", void 0);
    return GetSdkKeysPathParams;
}(SpeakeasyBase));
export { GetSdkKeysPathParams };
var GetSdkKeysRequest = /** @class */ (function (_super) {
    __extends(GetSdkKeysRequest, _super);
    function GetSdkKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSdkKeysPathParams)
    ], GetSdkKeysRequest.prototype, "pathParams", void 0);
    return GetSdkKeysRequest;
}(SpeakeasyBase));
export { GetSdkKeysRequest };
var GetSdkKeysResponse = /** @class */ (function (_super) {
    __extends(GetSdkKeysResponse, _super);
    function GetSdkKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSdkKeysResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SdkKeysModel)
    ], GetSdkKeysResponse.prototype, "sdkKeysModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSdkKeysResponse.prototype, "statusCode", void 0);
    return GetSdkKeysResponse;
}(SpeakeasyBase));
export { GetSdkKeysResponse };

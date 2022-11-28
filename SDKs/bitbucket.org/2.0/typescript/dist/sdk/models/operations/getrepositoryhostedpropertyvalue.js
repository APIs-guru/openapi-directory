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
var GetRepositoryHostedPropertyValuePathParams = /** @class */ (function (_super) {
    __extends(GetRepositoryHostedPropertyValuePathParams, _super);
    function GetRepositoryHostedPropertyValuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_key" }),
        __metadata("design:type", String)
    ], GetRepositoryHostedPropertyValuePathParams.prototype, "appKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=property_name" }),
        __metadata("design:type", String)
    ], GetRepositoryHostedPropertyValuePathParams.prototype, "propertyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetRepositoryHostedPropertyValuePathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetRepositoryHostedPropertyValuePathParams.prototype, "workspace", void 0);
    return GetRepositoryHostedPropertyValuePathParams;
}(SpeakeasyBase));
export { GetRepositoryHostedPropertyValuePathParams };
var GetRepositoryHostedPropertyValueRequest = /** @class */ (function (_super) {
    __extends(GetRepositoryHostedPropertyValueRequest, _super);
    function GetRepositoryHostedPropertyValueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRepositoryHostedPropertyValuePathParams)
    ], GetRepositoryHostedPropertyValueRequest.prototype, "pathParams", void 0);
    return GetRepositoryHostedPropertyValueRequest;
}(SpeakeasyBase));
export { GetRepositoryHostedPropertyValueRequest };
var GetRepositoryHostedPropertyValueResponse = /** @class */ (function (_super) {
    __extends(GetRepositoryHostedPropertyValueResponse, _super);
    function GetRepositoryHostedPropertyValueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRepositoryHostedPropertyValueResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRepositoryHostedPropertyValueResponse.prototype, "statusCode", void 0);
    return GetRepositoryHostedPropertyValueResponse;
}(SpeakeasyBase));
export { GetRepositoryHostedPropertyValueResponse };

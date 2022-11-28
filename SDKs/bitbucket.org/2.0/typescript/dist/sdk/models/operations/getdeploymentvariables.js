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
var GetDeploymentVariablesPathParams = /** @class */ (function (_super) {
    __extends(GetDeploymentVariablesPathParams, _super);
    function GetDeploymentVariablesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environment_uuid" }),
        __metadata("design:type", String)
    ], GetDeploymentVariablesPathParams.prototype, "environmentUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetDeploymentVariablesPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetDeploymentVariablesPathParams.prototype, "workspace", void 0);
    return GetDeploymentVariablesPathParams;
}(SpeakeasyBase));
export { GetDeploymentVariablesPathParams };
var GetDeploymentVariablesRequest = /** @class */ (function (_super) {
    __extends(GetDeploymentVariablesRequest, _super);
    function GetDeploymentVariablesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeploymentVariablesPathParams)
    ], GetDeploymentVariablesRequest.prototype, "pathParams", void 0);
    return GetDeploymentVariablesRequest;
}(SpeakeasyBase));
export { GetDeploymentVariablesRequest };
var GetDeploymentVariablesResponse = /** @class */ (function (_super) {
    __extends(GetDeploymentVariablesResponse, _super);
    function GetDeploymentVariablesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeploymentVariablesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeploymentVariablesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedDeploymentVariable)
    ], GetDeploymentVariablesResponse.prototype, "paginatedDeploymentVariable", void 0);
    return GetDeploymentVariablesResponse;
}(SpeakeasyBase));
export { GetDeploymentVariablesResponse };

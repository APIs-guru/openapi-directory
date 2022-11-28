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
var UpdateDeploymentVariablePathParams = /** @class */ (function (_super) {
    __extends(UpdateDeploymentVariablePathParams, _super);
    function UpdateDeploymentVariablePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environment_uuid" }),
        __metadata("design:type", String)
    ], UpdateDeploymentVariablePathParams.prototype, "environmentUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], UpdateDeploymentVariablePathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=variable_uuid" }),
        __metadata("design:type", String)
    ], UpdateDeploymentVariablePathParams.prototype, "variableUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], UpdateDeploymentVariablePathParams.prototype, "workspace", void 0);
    return UpdateDeploymentVariablePathParams;
}(SpeakeasyBase));
export { UpdateDeploymentVariablePathParams };
var UpdateDeploymentVariableRequest = /** @class */ (function (_super) {
    __extends(UpdateDeploymentVariableRequest, _super);
    function UpdateDeploymentVariableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDeploymentVariablePathParams)
    ], UpdateDeploymentVariableRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], UpdateDeploymentVariableRequest.prototype, "request", void 0);
    return UpdateDeploymentVariableRequest;
}(SpeakeasyBase));
export { UpdateDeploymentVariableRequest };
var UpdateDeploymentVariableResponse = /** @class */ (function (_super) {
    __extends(UpdateDeploymentVariableResponse, _super);
    function UpdateDeploymentVariableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDeploymentVariableResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDeploymentVariableResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateDeploymentVariableResponse.prototype, "deploymentVariable", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateDeploymentVariableResponse.prototype, "error", void 0);
    return UpdateDeploymentVariableResponse;
}(SpeakeasyBase));
export { UpdateDeploymentVariableResponse };

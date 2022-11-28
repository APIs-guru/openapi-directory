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
var CreateDeploymentVariablePathParams = /** @class */ (function (_super) {
    __extends(CreateDeploymentVariablePathParams, _super);
    function CreateDeploymentVariablePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environment_uuid" }),
        __metadata("design:type", String)
    ], CreateDeploymentVariablePathParams.prototype, "environmentUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], CreateDeploymentVariablePathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], CreateDeploymentVariablePathParams.prototype, "workspace", void 0);
    return CreateDeploymentVariablePathParams;
}(SpeakeasyBase));
export { CreateDeploymentVariablePathParams };
var CreateDeploymentVariableQueryParams = /** @class */ (function (_super) {
    __extends(CreateDeploymentVariableQueryParams, _super);
    function CreateDeploymentVariableQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=variable_uuid" }),
        __metadata("design:type", String)
    ], CreateDeploymentVariableQueryParams.prototype, "variableUuid", void 0);
    return CreateDeploymentVariableQueryParams;
}(SpeakeasyBase));
export { CreateDeploymentVariableQueryParams };
var CreateDeploymentVariableRequest = /** @class */ (function (_super) {
    __extends(CreateDeploymentVariableRequest, _super);
    function CreateDeploymentVariableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDeploymentVariablePathParams)
    ], CreateDeploymentVariableRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDeploymentVariableQueryParams)
    ], CreateDeploymentVariableRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], CreateDeploymentVariableRequest.prototype, "request", void 0);
    return CreateDeploymentVariableRequest;
}(SpeakeasyBase));
export { CreateDeploymentVariableRequest };
var CreateDeploymentVariableResponse = /** @class */ (function (_super) {
    __extends(CreateDeploymentVariableResponse, _super);
    function CreateDeploymentVariableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDeploymentVariableResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateDeploymentVariableResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDeploymentVariableResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateDeploymentVariableResponse.prototype, "deploymentVariable", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateDeploymentVariableResponse.prototype, "error", void 0);
    return CreateDeploymentVariableResponse;
}(SpeakeasyBase));
export { CreateDeploymentVariableResponse };

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
var ReposGetDeploymentStatusPathParams = /** @class */ (function (_super) {
    __extends(ReposGetDeploymentStatusPathParams, _super);
    function ReposGetDeploymentStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deployment_id" }),
        __metadata("design:type", Number)
    ], ReposGetDeploymentStatusPathParams.prototype, "deploymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposGetDeploymentStatusPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposGetDeploymentStatusPathParams.prototype, "repo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=status_id" }),
        __metadata("design:type", Number)
    ], ReposGetDeploymentStatusPathParams.prototype, "statusId", void 0);
    return ReposGetDeploymentStatusPathParams;
}(SpeakeasyBase));
export { ReposGetDeploymentStatusPathParams };
var ReposGetDeploymentStatus415ApplicationJson = /** @class */ (function (_super) {
    __extends(ReposGetDeploymentStatus415ApplicationJson, _super);
    function ReposGetDeploymentStatus415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ReposGetDeploymentStatus415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ReposGetDeploymentStatus415ApplicationJson.prototype, "message", void 0);
    return ReposGetDeploymentStatus415ApplicationJson;
}(SpeakeasyBase));
export { ReposGetDeploymentStatus415ApplicationJson };
var ReposGetDeploymentStatusRequest = /** @class */ (function (_super) {
    __extends(ReposGetDeploymentStatusRequest, _super);
    function ReposGetDeploymentStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposGetDeploymentStatusPathParams)
    ], ReposGetDeploymentStatusRequest.prototype, "pathParams", void 0);
    return ReposGetDeploymentStatusRequest;
}(SpeakeasyBase));
export { ReposGetDeploymentStatusRequest };
var ReposGetDeploymentStatusResponse = /** @class */ (function (_super) {
    __extends(ReposGetDeploymentStatusResponse, _super);
    function ReposGetDeploymentStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposGetDeploymentStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposGetDeploymentStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReposGetDeploymentStatusResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeploymentStatus)
    ], ReposGetDeploymentStatusResponse.prototype, "deploymentStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposGetDeploymentStatus415ApplicationJson)
    ], ReposGetDeploymentStatusResponse.prototype, "reposGetDeploymentStatus415ApplicationJsonObject", void 0);
    return ReposGetDeploymentStatusResponse;
}(SpeakeasyBase));
export { ReposGetDeploymentStatusResponse };

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
var ReposCreateDeploymentPathParams = /** @class */ (function (_super) {
    __extends(ReposCreateDeploymentPathParams, _super);
    function ReposCreateDeploymentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposCreateDeploymentPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposCreateDeploymentPathParams.prototype, "repo", void 0);
    return ReposCreateDeploymentPathParams;
}(SpeakeasyBase));
export { ReposCreateDeploymentPathParams };
var ReposCreateDeploymentRequestBody = /** @class */ (function (_super) {
    __extends(ReposCreateDeploymentRequestBody, _super);
    function ReposCreateDeploymentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auto_merge" }),
        __metadata("design:type", Boolean)
    ], ReposCreateDeploymentRequestBody.prototype, "autoMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ReposCreateDeploymentRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", String)
    ], ReposCreateDeploymentRequestBody.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payload" }),
        __metadata("design:type", Object)
    ], ReposCreateDeploymentRequestBody.prototype, "payload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=production_environment" }),
        __metadata("design:type", Boolean)
    ], ReposCreateDeploymentRequestBody.prototype, "productionEnvironment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ref" }),
        __metadata("design:type", String)
    ], ReposCreateDeploymentRequestBody.prototype, "ref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required_contexts" }),
        __metadata("design:type", Array)
    ], ReposCreateDeploymentRequestBody.prototype, "requiredContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=task" }),
        __metadata("design:type", String)
    ], ReposCreateDeploymentRequestBody.prototype, "task", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transient_environment" }),
        __metadata("design:type", Boolean)
    ], ReposCreateDeploymentRequestBody.prototype, "transientEnvironment", void 0);
    return ReposCreateDeploymentRequestBody;
}(SpeakeasyBase));
export { ReposCreateDeploymentRequestBody };
var ReposCreateDeployment202ApplicationJson = /** @class */ (function (_super) {
    __extends(ReposCreateDeployment202ApplicationJson, _super);
    function ReposCreateDeployment202ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ReposCreateDeployment202ApplicationJson.prototype, "message", void 0);
    return ReposCreateDeployment202ApplicationJson;
}(SpeakeasyBase));
export { ReposCreateDeployment202ApplicationJson };
var ReposCreateDeploymentRequest = /** @class */ (function (_super) {
    __extends(ReposCreateDeploymentRequest, _super);
    function ReposCreateDeploymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposCreateDeploymentPathParams)
    ], ReposCreateDeploymentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposCreateDeploymentRequestBody)
    ], ReposCreateDeploymentRequest.prototype, "request", void 0);
    return ReposCreateDeploymentRequest;
}(SpeakeasyBase));
export { ReposCreateDeploymentRequest };
var ReposCreateDeploymentResponse = /** @class */ (function (_super) {
    __extends(ReposCreateDeploymentResponse, _super);
    function ReposCreateDeploymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposCreateDeploymentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposCreateDeploymentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Deployment)
    ], ReposCreateDeploymentResponse.prototype, "deployment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposCreateDeployment202ApplicationJson)
    ], ReposCreateDeploymentResponse.prototype, "reposCreateDeployment202ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ReposCreateDeploymentResponse.prototype, "validationError", void 0);
    return ReposCreateDeploymentResponse;
}(SpeakeasyBase));
export { ReposCreateDeploymentResponse };

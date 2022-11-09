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
var CreateWorkloadSharePathParams = /** @class */ (function (_super) {
    __extends(CreateWorkloadSharePathParams, _super);
    function CreateWorkloadSharePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkloadId" }),
        __metadata("design:type", String)
    ], CreateWorkloadSharePathParams.prototype, "workloadId", void 0);
    return CreateWorkloadSharePathParams;
}(SpeakeasyBase));
export { CreateWorkloadSharePathParams };
var CreateWorkloadShareHeaders = /** @class */ (function (_super) {
    __extends(CreateWorkloadShareHeaders, _super);
    function CreateWorkloadShareHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateWorkloadShareHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateWorkloadShareHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateWorkloadShareHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateWorkloadShareHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateWorkloadShareHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateWorkloadShareHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateWorkloadShareHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateWorkloadShareHeaders;
}(SpeakeasyBase));
export { CreateWorkloadShareHeaders };
export var CreateWorkloadShareRequestBodyPermissionTypeEnum;
(function (CreateWorkloadShareRequestBodyPermissionTypeEnum) {
    CreateWorkloadShareRequestBodyPermissionTypeEnum["Readonly"] = "READONLY";
    CreateWorkloadShareRequestBodyPermissionTypeEnum["Contributor"] = "CONTRIBUTOR";
})(CreateWorkloadShareRequestBodyPermissionTypeEnum || (CreateWorkloadShareRequestBodyPermissionTypeEnum = {}));
var CreateWorkloadShareRequestBody = /** @class */ (function (_super) {
    __extends(CreateWorkloadShareRequestBody, _super);
    function CreateWorkloadShareRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ClientRequestToken" }),
        __metadata("design:type", String)
    ], CreateWorkloadShareRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        Metadata({ data: "json, name=PermissionType" }),
        __metadata("design:type", String)
    ], CreateWorkloadShareRequestBody.prototype, "permissionType", void 0);
    __decorate([
        Metadata({ data: "json, name=SharedWith" }),
        __metadata("design:type", String)
    ], CreateWorkloadShareRequestBody.prototype, "sharedWith", void 0);
    return CreateWorkloadShareRequestBody;
}(SpeakeasyBase));
export { CreateWorkloadShareRequestBody };
var CreateWorkloadShareRequest = /** @class */ (function (_super) {
    __extends(CreateWorkloadShareRequest, _super);
    function CreateWorkloadShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateWorkloadSharePathParams)
    ], CreateWorkloadShareRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateWorkloadShareHeaders)
    ], CreateWorkloadShareRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateWorkloadShareRequestBody)
    ], CreateWorkloadShareRequest.prototype, "request", void 0);
    return CreateWorkloadShareRequest;
}(SpeakeasyBase));
export { CreateWorkloadShareRequest };
var CreateWorkloadShareResponse = /** @class */ (function (_super) {
    __extends(CreateWorkloadShareResponse, _super);
    function CreateWorkloadShareResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorkloadShareResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorkloadShareResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateWorkloadShareResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateWorkloadShareOutput)
    ], CreateWorkloadShareResponse.prototype, "createWorkloadShareOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorkloadShareResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorkloadShareResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorkloadShareResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateWorkloadShareResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorkloadShareResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorkloadShareResponse.prototype, "validationException", void 0);
    return CreateWorkloadShareResponse;
}(SpeakeasyBase));
export { CreateWorkloadShareResponse };

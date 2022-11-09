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
var UpdateWorkloadSharePathParams = /** @class */ (function (_super) {
    __extends(UpdateWorkloadSharePathParams, _super);
    function UpdateWorkloadSharePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ShareId" }),
        __metadata("design:type", String)
    ], UpdateWorkloadSharePathParams.prototype, "shareId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkloadId" }),
        __metadata("design:type", String)
    ], UpdateWorkloadSharePathParams.prototype, "workloadId", void 0);
    return UpdateWorkloadSharePathParams;
}(SpeakeasyBase));
export { UpdateWorkloadSharePathParams };
var UpdateWorkloadShareHeaders = /** @class */ (function (_super) {
    __extends(UpdateWorkloadShareHeaders, _super);
    function UpdateWorkloadShareHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateWorkloadShareHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateWorkloadShareHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateWorkloadShareHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateWorkloadShareHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateWorkloadShareHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateWorkloadShareHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateWorkloadShareHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateWorkloadShareHeaders;
}(SpeakeasyBase));
export { UpdateWorkloadShareHeaders };
export var UpdateWorkloadShareRequestBodyPermissionTypeEnum;
(function (UpdateWorkloadShareRequestBodyPermissionTypeEnum) {
    UpdateWorkloadShareRequestBodyPermissionTypeEnum["Readonly"] = "READONLY";
    UpdateWorkloadShareRequestBodyPermissionTypeEnum["Contributor"] = "CONTRIBUTOR";
})(UpdateWorkloadShareRequestBodyPermissionTypeEnum || (UpdateWorkloadShareRequestBodyPermissionTypeEnum = {}));
var UpdateWorkloadShareRequestBody = /** @class */ (function (_super) {
    __extends(UpdateWorkloadShareRequestBody, _super);
    function UpdateWorkloadShareRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=PermissionType" }),
        __metadata("design:type", String)
    ], UpdateWorkloadShareRequestBody.prototype, "permissionType", void 0);
    return UpdateWorkloadShareRequestBody;
}(SpeakeasyBase));
export { UpdateWorkloadShareRequestBody };
var UpdateWorkloadShareRequest = /** @class */ (function (_super) {
    __extends(UpdateWorkloadShareRequest, _super);
    function UpdateWorkloadShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateWorkloadSharePathParams)
    ], UpdateWorkloadShareRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateWorkloadShareHeaders)
    ], UpdateWorkloadShareRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateWorkloadShareRequestBody)
    ], UpdateWorkloadShareRequest.prototype, "request", void 0);
    return UpdateWorkloadShareRequest;
}(SpeakeasyBase));
export { UpdateWorkloadShareRequest };
var UpdateWorkloadShareResponse = /** @class */ (function (_super) {
    __extends(UpdateWorkloadShareResponse, _super);
    function UpdateWorkloadShareResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateWorkloadShareResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateWorkloadShareResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateWorkloadShareResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateWorkloadShareResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateWorkloadShareResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateWorkloadShareResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateWorkloadShareResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateWorkloadShareOutput)
    ], UpdateWorkloadShareResponse.prototype, "updateWorkloadShareOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateWorkloadShareResponse.prototype, "validationException", void 0);
    return UpdateWorkloadShareResponse;
}(SpeakeasyBase));
export { UpdateWorkloadShareResponse };

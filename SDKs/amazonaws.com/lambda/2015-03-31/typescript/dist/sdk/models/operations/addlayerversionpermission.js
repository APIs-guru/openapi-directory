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
var AddLayerVersionPermissionPathParams = /** @class */ (function (_super) {
    __extends(AddLayerVersionPermissionPathParams, _super);
    function AddLayerVersionPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=LayerName" }),
        __metadata("design:type", String)
    ], AddLayerVersionPermissionPathParams.prototype, "layerName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=VersionNumber" }),
        __metadata("design:type", Number)
    ], AddLayerVersionPermissionPathParams.prototype, "versionNumber", void 0);
    return AddLayerVersionPermissionPathParams;
}(SpeakeasyBase));
export { AddLayerVersionPermissionPathParams };
var AddLayerVersionPermissionQueryParams = /** @class */ (function (_super) {
    __extends(AddLayerVersionPermissionQueryParams, _super);
    function AddLayerVersionPermissionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RevisionId" }),
        __metadata("design:type", String)
    ], AddLayerVersionPermissionQueryParams.prototype, "revisionId", void 0);
    return AddLayerVersionPermissionQueryParams;
}(SpeakeasyBase));
export { AddLayerVersionPermissionQueryParams };
var AddLayerVersionPermissionHeaders = /** @class */ (function (_super) {
    __extends(AddLayerVersionPermissionHeaders, _super);
    function AddLayerVersionPermissionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AddLayerVersionPermissionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AddLayerVersionPermissionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AddLayerVersionPermissionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AddLayerVersionPermissionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AddLayerVersionPermissionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AddLayerVersionPermissionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AddLayerVersionPermissionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return AddLayerVersionPermissionHeaders;
}(SpeakeasyBase));
export { AddLayerVersionPermissionHeaders };
var AddLayerVersionPermissionRequestBody = /** @class */ (function (_super) {
    __extends(AddLayerVersionPermissionRequestBody, _super);
    function AddLayerVersionPermissionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Action" }),
        __metadata("design:type", String)
    ], AddLayerVersionPermissionRequestBody.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "json, name=OrganizationId" }),
        __metadata("design:type", String)
    ], AddLayerVersionPermissionRequestBody.prototype, "organizationId", void 0);
    __decorate([
        Metadata({ data: "json, name=Principal" }),
        __metadata("design:type", String)
    ], AddLayerVersionPermissionRequestBody.prototype, "principal", void 0);
    __decorate([
        Metadata({ data: "json, name=StatementId" }),
        __metadata("design:type", String)
    ], AddLayerVersionPermissionRequestBody.prototype, "statementId", void 0);
    return AddLayerVersionPermissionRequestBody;
}(SpeakeasyBase));
export { AddLayerVersionPermissionRequestBody };
var AddLayerVersionPermissionRequest = /** @class */ (function (_super) {
    __extends(AddLayerVersionPermissionRequest, _super);
    function AddLayerVersionPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AddLayerVersionPermissionPathParams)
    ], AddLayerVersionPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AddLayerVersionPermissionQueryParams)
    ], AddLayerVersionPermissionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AddLayerVersionPermissionHeaders)
    ], AddLayerVersionPermissionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddLayerVersionPermissionRequestBody)
    ], AddLayerVersionPermissionRequest.prototype, "request", void 0);
    return AddLayerVersionPermissionRequest;
}(SpeakeasyBase));
export { AddLayerVersionPermissionRequest };
var AddLayerVersionPermissionResponse = /** @class */ (function (_super) {
    __extends(AddLayerVersionPermissionResponse, _super);
    function AddLayerVersionPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AddLayerVersionPermissionResponse)
    ], AddLayerVersionPermissionResponse.prototype, "addLayerVersionPermissionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AddLayerVersionPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddLayerVersionPermissionResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddLayerVersionPermissionResponse.prototype, "policyLengthExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddLayerVersionPermissionResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddLayerVersionPermissionResponse.prototype, "resourceConflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddLayerVersionPermissionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddLayerVersionPermissionResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AddLayerVersionPermissionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddLayerVersionPermissionResponse.prototype, "tooManyRequestsException", void 0);
    return AddLayerVersionPermissionResponse;
}(SpeakeasyBase));
export { AddLayerVersionPermissionResponse };

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
var AddPermissionPathParams = /** @class */ (function (_super) {
    __extends(AddPermissionPathParams, _super);
    function AddPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" }),
        __metadata("design:type", String)
    ], AddPermissionPathParams.prototype, "functionName", void 0);
    return AddPermissionPathParams;
}(SpeakeasyBase));
export { AddPermissionPathParams };
var AddPermissionQueryParams = /** @class */ (function (_super) {
    __extends(AddPermissionQueryParams, _super);
    function AddPermissionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Qualifier" }),
        __metadata("design:type", String)
    ], AddPermissionQueryParams.prototype, "qualifier", void 0);
    return AddPermissionQueryParams;
}(SpeakeasyBase));
export { AddPermissionQueryParams };
var AddPermissionHeaders = /** @class */ (function (_super) {
    __extends(AddPermissionHeaders, _super);
    function AddPermissionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AddPermissionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AddPermissionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AddPermissionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AddPermissionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AddPermissionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AddPermissionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AddPermissionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return AddPermissionHeaders;
}(SpeakeasyBase));
export { AddPermissionHeaders };
var AddPermissionRequestBody = /** @class */ (function (_super) {
    __extends(AddPermissionRequestBody, _super);
    function AddPermissionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Action" }),
        __metadata("design:type", String)
    ], AddPermissionRequestBody.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "json, name=EventSourceToken" }),
        __metadata("design:type", String)
    ], AddPermissionRequestBody.prototype, "eventSourceToken", void 0);
    __decorate([
        Metadata({ data: "json, name=Principal" }),
        __metadata("design:type", String)
    ], AddPermissionRequestBody.prototype, "principal", void 0);
    __decorate([
        Metadata({ data: "json, name=RevisionId" }),
        __metadata("design:type", String)
    ], AddPermissionRequestBody.prototype, "revisionId", void 0);
    __decorate([
        Metadata({ data: "json, name=SourceAccount" }),
        __metadata("design:type", String)
    ], AddPermissionRequestBody.prototype, "sourceAccount", void 0);
    __decorate([
        Metadata({ data: "json, name=SourceArn" }),
        __metadata("design:type", String)
    ], AddPermissionRequestBody.prototype, "sourceArn", void 0);
    __decorate([
        Metadata({ data: "json, name=StatementId" }),
        __metadata("design:type", String)
    ], AddPermissionRequestBody.prototype, "statementId", void 0);
    return AddPermissionRequestBody;
}(SpeakeasyBase));
export { AddPermissionRequestBody };
var AddPermissionRequest = /** @class */ (function (_super) {
    __extends(AddPermissionRequest, _super);
    function AddPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AddPermissionPathParams)
    ], AddPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AddPermissionQueryParams)
    ], AddPermissionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AddPermissionHeaders)
    ], AddPermissionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddPermissionRequestBody)
    ], AddPermissionRequest.prototype, "request", void 0);
    return AddPermissionRequest;
}(SpeakeasyBase));
export { AddPermissionRequest };
var AddPermissionResponse = /** @class */ (function (_super) {
    __extends(AddPermissionResponse, _super);
    function AddPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AddPermissionResponse)
    ], AddPermissionResponse.prototype, "addPermissionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AddPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddPermissionResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddPermissionResponse.prototype, "policyLengthExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddPermissionResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddPermissionResponse.prototype, "resourceConflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddPermissionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddPermissionResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AddPermissionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddPermissionResponse.prototype, "tooManyRequestsException", void 0);
    return AddPermissionResponse;
}(SpeakeasyBase));
export { AddPermissionResponse };

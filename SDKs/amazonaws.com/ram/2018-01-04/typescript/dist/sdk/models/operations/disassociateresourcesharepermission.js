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
var DisassociateResourceSharePermissionHeaders = /** @class */ (function (_super) {
    __extends(DisassociateResourceSharePermissionHeaders, _super);
    function DisassociateResourceSharePermissionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DisassociateResourceSharePermissionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DisassociateResourceSharePermissionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DisassociateResourceSharePermissionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DisassociateResourceSharePermissionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DisassociateResourceSharePermissionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DisassociateResourceSharePermissionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DisassociateResourceSharePermissionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DisassociateResourceSharePermissionHeaders;
}(SpeakeasyBase));
export { DisassociateResourceSharePermissionHeaders };
var DisassociateResourceSharePermissionRequestBody = /** @class */ (function (_super) {
    __extends(DisassociateResourceSharePermissionRequestBody, _super);
    function DisassociateResourceSharePermissionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], DisassociateResourceSharePermissionRequestBody.prototype, "clientToken", void 0);
    __decorate([
        Metadata({ data: "json, name=permissionArn" }),
        __metadata("design:type", String)
    ], DisassociateResourceSharePermissionRequestBody.prototype, "permissionArn", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceShareArn" }),
        __metadata("design:type", String)
    ], DisassociateResourceSharePermissionRequestBody.prototype, "resourceShareArn", void 0);
    return DisassociateResourceSharePermissionRequestBody;
}(SpeakeasyBase));
export { DisassociateResourceSharePermissionRequestBody };
var DisassociateResourceSharePermissionRequest = /** @class */ (function (_super) {
    __extends(DisassociateResourceSharePermissionRequest, _super);
    function DisassociateResourceSharePermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DisassociateResourceSharePermissionHeaders)
    ], DisassociateResourceSharePermissionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DisassociateResourceSharePermissionRequestBody)
    ], DisassociateResourceSharePermissionRequest.prototype, "request", void 0);
    return DisassociateResourceSharePermissionRequest;
}(SpeakeasyBase));
export { DisassociateResourceSharePermissionRequest };
var DisassociateResourceSharePermissionResponse = /** @class */ (function (_super) {
    __extends(DisassociateResourceSharePermissionResponse, _super);
    function DisassociateResourceSharePermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DisassociateResourceSharePermissionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DisassociateResourceSharePermissionResponse)
    ], DisassociateResourceSharePermissionResponse.prototype, "disassociateResourceSharePermissionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateResourceSharePermissionResponse.prototype, "invalidClientTokenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateResourceSharePermissionResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateResourceSharePermissionResponse.prototype, "invalidStateTransitionException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateResourceSharePermissionResponse.prototype, "malformedArnException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateResourceSharePermissionResponse.prototype, "operationNotPermittedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateResourceSharePermissionResponse.prototype, "serverInternalException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateResourceSharePermissionResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DisassociateResourceSharePermissionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateResourceSharePermissionResponse.prototype, "unknownResourceException", void 0);
    return DisassociateResourceSharePermissionResponse;
}(SpeakeasyBase));
export { DisassociateResourceSharePermissionResponse };

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
var DisassociateResourceShareHeaders = /** @class */ (function (_super) {
    __extends(DisassociateResourceShareHeaders, _super);
    function DisassociateResourceShareHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DisassociateResourceShareHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DisassociateResourceShareHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DisassociateResourceShareHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DisassociateResourceShareHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DisassociateResourceShareHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DisassociateResourceShareHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DisassociateResourceShareHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DisassociateResourceShareHeaders;
}(SpeakeasyBase));
export { DisassociateResourceShareHeaders };
var DisassociateResourceShareRequestBody = /** @class */ (function (_super) {
    __extends(DisassociateResourceShareRequestBody, _super);
    function DisassociateResourceShareRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], DisassociateResourceShareRequestBody.prototype, "clientToken", void 0);
    __decorate([
        Metadata({ data: "json, name=principals" }),
        __metadata("design:type", Array)
    ], DisassociateResourceShareRequestBody.prototype, "principals", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceArns" }),
        __metadata("design:type", Array)
    ], DisassociateResourceShareRequestBody.prototype, "resourceArns", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceShareArn" }),
        __metadata("design:type", String)
    ], DisassociateResourceShareRequestBody.prototype, "resourceShareArn", void 0);
    return DisassociateResourceShareRequestBody;
}(SpeakeasyBase));
export { DisassociateResourceShareRequestBody };
var DisassociateResourceShareRequest = /** @class */ (function (_super) {
    __extends(DisassociateResourceShareRequest, _super);
    function DisassociateResourceShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DisassociateResourceShareHeaders)
    ], DisassociateResourceShareRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DisassociateResourceShareRequestBody)
    ], DisassociateResourceShareRequest.prototype, "request", void 0);
    return DisassociateResourceShareRequest;
}(SpeakeasyBase));
export { DisassociateResourceShareRequest };
var DisassociateResourceShareResponse = /** @class */ (function (_super) {
    __extends(DisassociateResourceShareResponse, _super);
    function DisassociateResourceShareResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DisassociateResourceShareResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DisassociateResourceShareResponse)
    ], DisassociateResourceShareResponse.prototype, "disassociateResourceShareResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateResourceShareResponse.prototype, "idempotentParameterMismatchException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateResourceShareResponse.prototype, "invalidClientTokenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateResourceShareResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateResourceShareResponse.prototype, "invalidStateTransitionException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateResourceShareResponse.prototype, "malformedArnException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateResourceShareResponse.prototype, "operationNotPermittedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateResourceShareResponse.prototype, "resourceShareLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateResourceShareResponse.prototype, "serverInternalException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateResourceShareResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DisassociateResourceShareResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateResourceShareResponse.prototype, "unknownResourceException", void 0);
    return DisassociateResourceShareResponse;
}(SpeakeasyBase));
export { DisassociateResourceShareResponse };

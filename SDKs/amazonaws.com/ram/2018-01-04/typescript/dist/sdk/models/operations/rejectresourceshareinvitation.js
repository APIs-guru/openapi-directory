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
var RejectResourceShareInvitationHeaders = /** @class */ (function (_super) {
    __extends(RejectResourceShareInvitationHeaders, _super);
    function RejectResourceShareInvitationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RejectResourceShareInvitationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RejectResourceShareInvitationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RejectResourceShareInvitationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RejectResourceShareInvitationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RejectResourceShareInvitationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RejectResourceShareInvitationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RejectResourceShareInvitationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return RejectResourceShareInvitationHeaders;
}(SpeakeasyBase));
export { RejectResourceShareInvitationHeaders };
var RejectResourceShareInvitationRequestBody = /** @class */ (function (_super) {
    __extends(RejectResourceShareInvitationRequestBody, _super);
    function RejectResourceShareInvitationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], RejectResourceShareInvitationRequestBody.prototype, "clientToken", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceShareInvitationArn" }),
        __metadata("design:type", String)
    ], RejectResourceShareInvitationRequestBody.prototype, "resourceShareInvitationArn", void 0);
    return RejectResourceShareInvitationRequestBody;
}(SpeakeasyBase));
export { RejectResourceShareInvitationRequestBody };
var RejectResourceShareInvitationRequest = /** @class */ (function (_super) {
    __extends(RejectResourceShareInvitationRequest, _super);
    function RejectResourceShareInvitationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RejectResourceShareInvitationHeaders)
    ], RejectResourceShareInvitationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RejectResourceShareInvitationRequestBody)
    ], RejectResourceShareInvitationRequest.prototype, "request", void 0);
    return RejectResourceShareInvitationRequest;
}(SpeakeasyBase));
export { RejectResourceShareInvitationRequest };
var RejectResourceShareInvitationResponse = /** @class */ (function (_super) {
    __extends(RejectResourceShareInvitationResponse, _super);
    function RejectResourceShareInvitationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RejectResourceShareInvitationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RejectResourceShareInvitationResponse.prototype, "idempotentParameterMismatchException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RejectResourceShareInvitationResponse.prototype, "invalidClientTokenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RejectResourceShareInvitationResponse.prototype, "malformedArnException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RejectResourceShareInvitationResponse.prototype, "operationNotPermittedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.RejectResourceShareInvitationResponse)
    ], RejectResourceShareInvitationResponse.prototype, "rejectResourceShareInvitationResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RejectResourceShareInvitationResponse.prototype, "resourceShareInvitationAlreadyAcceptedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RejectResourceShareInvitationResponse.prototype, "resourceShareInvitationAlreadyRejectedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RejectResourceShareInvitationResponse.prototype, "resourceShareInvitationArnNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RejectResourceShareInvitationResponse.prototype, "resourceShareInvitationExpiredException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RejectResourceShareInvitationResponse.prototype, "serverInternalException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RejectResourceShareInvitationResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RejectResourceShareInvitationResponse.prototype, "statusCode", void 0);
    return RejectResourceShareInvitationResponse;
}(SpeakeasyBase));
export { RejectResourceShareInvitationResponse };

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
var AcceptResourceShareInvitationHeaders = /** @class */ (function (_super) {
    __extends(AcceptResourceShareInvitationHeaders, _super);
    function AcceptResourceShareInvitationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AcceptResourceShareInvitationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AcceptResourceShareInvitationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AcceptResourceShareInvitationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AcceptResourceShareInvitationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AcceptResourceShareInvitationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AcceptResourceShareInvitationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AcceptResourceShareInvitationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return AcceptResourceShareInvitationHeaders;
}(SpeakeasyBase));
export { AcceptResourceShareInvitationHeaders };
var AcceptResourceShareInvitationRequestBody = /** @class */ (function (_super) {
    __extends(AcceptResourceShareInvitationRequestBody, _super);
    function AcceptResourceShareInvitationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], AcceptResourceShareInvitationRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceShareInvitationArn" }),
        __metadata("design:type", String)
    ], AcceptResourceShareInvitationRequestBody.prototype, "resourceShareInvitationArn", void 0);
    return AcceptResourceShareInvitationRequestBody;
}(SpeakeasyBase));
export { AcceptResourceShareInvitationRequestBody };
var AcceptResourceShareInvitationRequest = /** @class */ (function (_super) {
    __extends(AcceptResourceShareInvitationRequest, _super);
    function AcceptResourceShareInvitationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AcceptResourceShareInvitationHeaders)
    ], AcceptResourceShareInvitationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AcceptResourceShareInvitationRequestBody)
    ], AcceptResourceShareInvitationRequest.prototype, "request", void 0);
    return AcceptResourceShareInvitationRequest;
}(SpeakeasyBase));
export { AcceptResourceShareInvitationRequest };
var AcceptResourceShareInvitationResponse = /** @class */ (function (_super) {
    __extends(AcceptResourceShareInvitationResponse, _super);
    function AcceptResourceShareInvitationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AcceptResourceShareInvitationResponse)
    ], AcceptResourceShareInvitationResponse.prototype, "acceptResourceShareInvitationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcceptResourceShareInvitationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AcceptResourceShareInvitationResponse.prototype, "idempotentParameterMismatchException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AcceptResourceShareInvitationResponse.prototype, "invalidClientTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AcceptResourceShareInvitationResponse.prototype, "malformedArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AcceptResourceShareInvitationResponse.prototype, "operationNotPermittedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AcceptResourceShareInvitationResponse.prototype, "resourceShareInvitationAlreadyAcceptedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AcceptResourceShareInvitationResponse.prototype, "resourceShareInvitationAlreadyRejectedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AcceptResourceShareInvitationResponse.prototype, "resourceShareInvitationArnNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AcceptResourceShareInvitationResponse.prototype, "resourceShareInvitationExpiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AcceptResourceShareInvitationResponse.prototype, "serverInternalException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AcceptResourceShareInvitationResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AcceptResourceShareInvitationResponse.prototype, "statusCode", void 0);
    return AcceptResourceShareInvitationResponse;
}(SpeakeasyBase));
export { AcceptResourceShareInvitationResponse };
